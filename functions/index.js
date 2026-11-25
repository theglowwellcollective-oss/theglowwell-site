// =====================================================================
// The homepage in German or French, chosen at the edge (Haziq, 24 Nov 2026:
// "German visitors get German and French visitors French ... It should be
// active"). Automatic, never a choice (Baset, 24 Nov 2026): there is no
// language menu and no banner. Runs for "/" only; every other page, the
// serum page included, stays a plain static file.
//
// THE RULE, in order (the scan app follows the same one, public/app/i18n.js
// in glowscan-v2):
//   1. ?lang= on the URL                       (old links only; nothing on
//                                                 the site offers a choice)
//   2. a crawler or link-preview bot           -> English, so search engines
//                                                 and shared-link cards always
//                                                 see the English page
//   3. her phone or computer language          -> en, de or fr if it is one
//      (the Accept-Language header)
//   4. the country, single-language countries only:
//        DE, AT, LI -> de      FR, MC -> fr
//      Belgium, Switzerland and Luxembourg speak more than one of these, so
//      there step 3 decides and anyone else gets English.
//   5. English
//
// No extra round trip: the static index.html comes from the asset server
// (context.next()), and for German or French this streams it through
// HTMLRewriter to set <html lang>, tell the page's own translation script
// which language to apply (window.GW_EDGE_LANG), hold the body invisible
// until that script has run so English never flashes, and point the scan
// buttons at the translated scan. English visitors get the file untouched.
//
// Preview hosts only (*.pages.dev, localhost): ?gw_country=DE and
// ?gw_al=de-DE stand in for the edge country and the phone language, so the
// rule can be checked on a preview link. Production ignores both.
// =====================================================================

const LANGS = ['en', 'de', 'fr'];
const COUNTRY_LANG = { DE: 'de', AT: 'de', LI: 'de', FR: 'fr', MC: 'fr' };
// Named crawlers and link-preview fetchers, plus the generic "SomethingBot/1.0".
// Deliberately not a bare "bot": phone names such as "CUBOT X30" must not match.
const BOT = /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|applebot|petalbot|semrushbot|ahrefsbot|mj12bot|dotbot|facebookexternalhit|facebot|twitterbot|linkedinbot|pinterestbot|embedly|whatsapp|telegrambot|discordbot|slackbot|skypeuripreview|bingpreview|google-inspectiontool|chrome-lighthouse|headlesschrome|crawler|spider|[a-z]bot\//i;
const SCAN_APP = 'https://scan.theglowwell.com/app/';

function norm(value) {
  if (typeof value !== 'string') return null;
  const v = value.trim().toLowerCase().slice(0, 2);
  return LANGS.includes(v) ? v : null;
}

/** The language her phone asks for first: "de-DE,de;q=0.9,en;q=0.8" -> "de". */
export function phoneLang(acceptLanguage) {
  if (typeof acceptLanguage !== 'string' || !acceptLanguage.trim()) return null;
  const items = acceptLanguage.split(',').map((part, i) => {
    const [tag, ...params] = part.trim().split(';');
    const qParam = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    return { tag: (tag || '').trim().toLowerCase(), q: Number.isFinite(q) ? q : 0, i };
  }).filter((x) => x.tag && x.tag !== '*' && x.q > 0);
  items.sort((a, b) => b.q - a.q || a.i - b.i);
  return items.length ? items[0].tag.split('-')[0] : null;
}

/** The whole rule, as a pure function. Returns { lang, how }. */
export function pickLang({ query, acceptLanguage, country, userAgent }) {
  const q = norm(query);
  if (q) return { lang: q, how: 'query' };
  if (typeof userAgent === 'string' && BOT.test(userAgent)) return { lang: 'en', how: 'bot' };
  const p = phoneLang(acceptLanguage);
  if (p && LANGS.includes(p)) return { lang: p, how: 'phone' };
  const k = typeof country === 'string' ? country.trim().toUpperCase() : '';
  if (COUNTRY_LANG[k]) return { lang: COUNTRY_LANG[k], how: 'country' };
  return { lang: 'en', how: 'default' };
}

export function isPreviewHost(hostname) {
  return /\.pages\.dev$/.test(hostname) || hostname === 'localhost' || hostname === '127.0.0.1';
}

export async function onRequestGet(context) {
  const res = await context.next();
  if (!res.ok || !(res.headers.get('content-type') || '').includes('text/html')) return res;
  // Fail open: any error in here serves the plain English page, never an error page.
  try {
    return localize(context.request, res);
  } catch (err) {
    console.error('homepage language: served the English page after an error', err);
    // A fresh copy: the first response's body may already be in use.
    return context.env.ASSETS.fetch(context.request);
  }
}

function localize(request, res) {
  const url = new URL(request.url);
  const preview = isPreviewHost(url.hostname);
  const pick = pickLang({
    query: url.searchParams.get('lang'),
    acceptLanguage: (preview && url.searchParams.get('gw_al')) || request.headers.get('accept-language'),
    country: (preview && url.searchParams.get('gw_country')) || (request.cf && request.cf.country) || null,
    userAgent: request.headers.get('user-agent'),
  });

  const headers = new Headers(res.headers);
  // The page differs by visitor: never cache it anywhere (the site's own
  // rule for HTML, restated because this response comes from a Function).
  headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  headers.set('Vary', 'Accept-Language');
  headers.set('Content-Language', pick.lang);
  headers.set('X-GW-Lang', `${pick.lang}; ${pick.how}`);
  const out = new Response(res.body, { status: res.status, statusText: res.statusText, headers });
  if (pick.lang === 'en') return out;

  const lang = pick.lang;
  return new HTMLRewriter()
    .on('html', { element(el) { el.setAttribute('lang', lang); } })
    .on('head', {
      element(el) {
        el.append(
          `<script>window.GW_EDGE_LANG=${JSON.stringify(lang)};</script>` +
          '<style id="gw-hold">body{opacity:0}</style>' +
          // Safety net: if the translation script never runs, show the page anyway.
          '<script>setTimeout(function(){var s=document.getElementById("gw-hold");if(s)s.remove();},1500);</script>',
          { html: true },
        );
      },
    })
    .on('a[data-scan-cta]', {
      element(el) {
        const href = el.getAttribute('href') || '';
        if (href.startsWith(SCAN_APP) && !/[?&]lang=/.test(href)) {
          el.setAttribute('href', `${href}${href.includes('?') ? '&' : '?'}lang=${lang}`);
        }
      },
    })
    .transform(out);
}
