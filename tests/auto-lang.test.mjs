// Tests for the homepage language rule in functions/index.js.
// Run: node --test tests/
// The Function file is plain ES module syntax in a folder with no
// package.json, so it is loaded through a data: URL (always a module).
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../functions/index.js', import.meta.url), 'utf8');
const { pickLang, phoneLang, isPreviewHost } =
  await import('data:text/javascript;base64,' + Buffer.from(src).toString('base64'));

const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148';
const INSTAGRAM = IPHONE + ' Instagram 356.0.0.36.92 (iPhone15,2; iOS 18_1; de_DE; de; scale=3.00; 1179x2556)';
const pick = (o) => pickLang({ userAgent: IPHONE, ...o });

test('phoneLang: the first language her phone asks for', () => {
  assert.equal(phoneLang('de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7'), 'de');
  assert.equal(phoneLang('fr-FR,fr;q=0.9'), 'fr');
  assert.equal(phoneLang('en-GB,en;q=0.9,de;q=0.8'), 'en');
  assert.equal(phoneLang('tr-TR,tr;q=0.9,de;q=0.8'), 'tr');
  assert.equal(phoneLang('en;q=0.5,de;q=0.9'), 'de', 'the highest q wins, not the first written');
  assert.equal(phoneLang('*'), null);
  assert.equal(phoneLang(''), null);
  assert.equal(phoneLang(undefined), null);
});

test('the rule: phone language first', () => {
  assert.deepEqual(pick({ acceptLanguage: 'de-DE,de;q=0.9', country: 'US' }), { lang: 'de', how: 'phone' });
  assert.deepEqual(pick({ acceptLanguage: 'fr-CA,fr;q=0.9', country: 'CA' }), { lang: 'fr', how: 'phone' });
  // An English phone in Germany (a tourist, an expat) keeps English.
  assert.deepEqual(pick({ acceptLanguage: 'en-US,en;q=0.9', country: 'DE' }), { lang: 'en', how: 'phone' });
});

test('the rule: the country decides only when the phone language is none of en, de, fr', () => {
  assert.deepEqual(pick({ acceptLanguage: 'tr-TR,tr;q=0.9', country: 'DE' }), { lang: 'de', how: 'country' });
  assert.deepEqual(pick({ acceptLanguage: 'pl-PL', country: 'AT' }), { lang: 'de', how: 'country' });
  assert.deepEqual(pick({ acceptLanguage: 'ar', country: 'FR' }), { lang: 'fr', how: 'country' });
  assert.deepEqual(pick({ acceptLanguage: 'it-IT', country: 'MC' }), { lang: 'fr', how: 'country' });
  assert.deepEqual(pick({ acceptLanguage: '', country: 'LI' }), { lang: 'de', how: 'country' });
  // Multilingual countries: the phone decides, otherwise English.
  for (const c of ['BE', 'CH', 'LU']) {
    assert.deepEqual(pick({ acceptLanguage: 'nl-BE,nl;q=0.9', country: c }), { lang: 'en', how: 'default' }, c);
  }
  assert.deepEqual(pick({ acceptLanguage: 'fr-BE', country: 'BE' }), { lang: 'fr', how: 'phone' });
  assert.deepEqual(pick({ acceptLanguage: 'de-CH', country: 'CH' }), { lang: 'de', how: 'phone' });
  assert.deepEqual(pick({ acceptLanguage: 'es-ES', country: 'US' }), { lang: 'en', how: 'default' });
  assert.deepEqual(pick({ acceptLanguage: 'es-ES', country: null }), { lang: 'en', how: 'default' });
});

test('the rule: ?lang= on an old link still works; junk is ignored', () => {
  assert.deepEqual(pick({ query: 'fr', acceptLanguage: 'de-DE', country: 'DE' }), { lang: 'fr', how: 'query' });
  assert.deepEqual(pick({ query: 'xx', acceptLanguage: 'de-DE' }), { lang: 'de', how: 'phone' });
  assert.deepEqual(pick({ query: '<script>', acceptLanguage: 'en-US', country: 'FR' }), { lang: 'en', how: 'phone' });
});

test('the rule: crawlers and link-preview bots always get English', () => {
  for (const ua of [
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    'WhatsApp/2.23.20.0',
    'Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)',
  ]) {
    assert.deepEqual(pickLang({ userAgent: ua, acceptLanguage: 'de-DE', country: 'DE' }), { lang: 'en', how: 'bot' }, ua);
  }
  // Real phones are not bots: the Instagram in-app browser, and a phone brand containing "bot".
  assert.deepEqual(pickLang({ userAgent: INSTAGRAM, acceptLanguage: 'de-DE', country: 'DE' }), { lang: 'de', how: 'phone' });
  assert.deepEqual(pickLang({ userAgent: 'Mozilla/5.0 (Linux; Android 13; CUBOT X30) Mobile Safari/537.36', acceptLanguage: 'de-DE' }), { lang: 'de', how: 'phone' });
});

test('isPreviewHost: the test overrides never work on the real site', () => {
  assert.equal(isPreviewHost('feat-auto-lang.theglowwell.pages.dev'), true);
  assert.equal(isPreviewHost('localhost'), true);
  assert.equal(isPreviewHost('theglowwell.com'), false, 'production never honours the test overrides');
  assert.equal(isPreviewHost('www.theglowwell.com'), false);
});

test('index.html: automatic only, no menu, no banner, no cookie; reveals itself once translated', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /window\.GW_EDGE_LANG/, 'the page reads the language the edge picked');
  assert.match(html, /getElementById\('gw-hold'\)/, 'the page reveals itself once translated');
  assert.doesNotMatch(html, /lang-menu|langMenu|data-lang=|lang-banner|LANG_BANNER|LANG_TOGGLE/, 'no language choice anywhere');
  assert.doesNotMatch(html + src, /document\.cookie|gw_lang/, 'no language cookie');
  assert.doesNotMatch(src, /[–—]/, 'no long dashes in the edge function');
  const langBlock = html.slice(html.indexOf('const GW_LANG='), html.indexOf('const I18N='));
  assert.ok(langBlock.length > 50 && !/[–—]/.test(langBlock), 'no long dashes in the new language picker');
});
