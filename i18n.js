/* i18n.js — The Glow Well
 *
 * Activates ONLY when the URL carries ?lang=de or ?lang=fr. Otherwise it exits
 * immediately and the English page is untouched.
 *
 * When active it:
 *  1. swaps the text/placeholder of every [data-i18n] element from TRANSLATIONS
 *     (translations.js). Empty "" values fall back to the inline English;
 *  2. exposes window.i18nT(key, fallback) for strings the page builds in JS;
 *  3. appends ?lang=xx to every internal link so the language follows the visitor
 *     (external links, mailto:, in-page #anchors and checkout URLs are left alone);
 *  4. points the EN · DE · FR toggle at the current page, keeping other params.
 *
 * No storage of any kind is used — the language lives only in the URL.
 */
(function () {
  'use strict';

  var lang;
  try { lang = new URLSearchParams(window.location.search).get('lang'); } catch (e) { return; }
  if (lang !== 'de' && lang !== 'fr') return;

  var dict = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS && TRANSLATIONS[lang]) || {};

  function lookup(key) {
    var v = dict[key];
    return (typeof v === 'string' && v.trim() !== '') ? v : null;
  }

  window.i18nT = function (key, fallback) {
    var v = lookup(key);
    return v === null ? fallback : v;
  };

  // Apply one translated string to one element.
  function applyText(el, str) {
    var tag = el.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) el.setAttribute('placeholder', str);
      return;
    }
    if (str.indexOf('<') !== -1) { el.innerHTML = str; return; }          // translation carries inline tags
    if (el.children.length === 0) { el.textContent = str; return; }       // plain element
    // Element has child elements (icon span, <strong>, <svg>…): replace only its
    // single text node so the children survive; keep the surrounding whitespace.
    var textNodes = [];
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3 && n.nodeValue.trim() !== '') textNodes.push(n);
    }
    if (textNodes.length === 1) {
      var old = textNodes[0].nodeValue;
      textNodes[0].nodeValue = old.match(/^\s*/)[0] + str + old.match(/\s*$/)[0];
      return;
    }
    el.textContent = str;
  }

  function translateDom() {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var v = lookup(els[i].getAttribute('data-i18n'));
      if (v !== null) applyText(els[i], v);
    }
  }

  function isInternal(href) {
    if (!href || href.charAt(0) === '#') return false;
    if (href.indexOf('//') === 0) return false;
    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) {                            // has a scheme (https:, mailto:, tel:…)
      return href.indexOf(window.location.origin + '/') === 0;
    }
    return true;
  }

  function withLang(href) {
    var hashIdx = href.indexOf('#');
    var base = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
    var hash = hashIdx >= 0 ? href.slice(hashIdx) : '';
    if (/[?&]lang=/.test(base)) base = base.replace(/([?&])lang=[^&]*/, '$1lang=' + lang);
    else base += (base.indexOf('?') >= 0 ? '&' : '?') + 'lang=' + lang;
    return base + hash;
  }

  function rewriteLinks() {
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      if (a.closest && a.closest('.lang-toggle')) continue;
      var href = a.getAttribute('href');
      if (!isInternal(href)) continue;
      a.setAttribute('href', withLang(href));
    }
  }

  function buildToggle() {
    var links = document.querySelectorAll('.lang-toggle a[data-lang]');
    for (var i = 0; i < links.length; i++) {
      var target = links[i].getAttribute('data-lang');
      var p;
      try { p = new URLSearchParams(window.location.search); } catch (e) { return; }
      if (target === 'en') p.delete('lang'); else p.set('lang', target);
      var qs = p.toString();
      links[i].setAttribute('href', window.location.pathname + (qs ? '?' + qs : '') + window.location.hash);
    }
  }

  document.documentElement.setAttribute('lang', lang);
  translateDom();
  rewriteLinks();
  buildToggle();
})();
