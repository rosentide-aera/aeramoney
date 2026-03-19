/**
 * scroll-animate.js
 * Uses IntersectionObserver to add .visible to .animate-on-scroll elements
 * when they enter the viewport. Fires once only per element.
 */
(function () {
  'use strict';

  // Bail out if IntersectionObserver is not supported
  if (!('IntersectionObserver' in window)) {
    // Fallback: make all elements immediately visible
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once only
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
    observer.observe(el);
  });
})();
