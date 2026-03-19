/**
 * nav-scroll.js
 * Adds/removes .scrolled class on the nav when user scrolls past 50px.
 * Triggers backdrop-filter blur and semi-opaque dark background.
 */
(function () {
  'use strict';

  var nav = document.getElementById('site-nav');
  if (!nav) return;

  var SCROLL_THRESHOLD = 50;

  function onScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // Run once on load in case page is already scrolled
  onScroll();

  window.addEventListener('scroll', onScroll, { passive: true });
})();
