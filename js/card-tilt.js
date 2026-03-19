/**
 * card-tilt.js
 * 3D perspective tilt effect on .feature-card elements on mousemove.
 * Disabled on touch devices (hover: none) to preserve tap experience.
 */
(function () {
  'use strict';

  // Only apply on devices that support hover (i.e. not touch-primary)
  var supportsHover = window.matchMedia('(hover: hover)').matches;
  if (!supportsHover) return;

  var cards = document.querySelectorAll('.feature-card');

  cards.forEach(function (card) {

    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform =
        'perspective(800px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) translateY(-4px)';
      card.style.boxShadow =
        (-x * 12) + 'px ' + (-y * 12) + 'px 40px rgba(0,0,0,0.12)';
      // Remove transition during active tilt for snappy feel
      card.style.transition = 'box-shadow 0.05s';
    });

    card.addEventListener('mouseleave', function () {
      // Smooth snap-back
      card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
      card.style.transform = '';
      card.style.boxShadow = '';

      // Clean up transition after it completes
      setTimeout(function () {
        card.style.transition = '';
      }, 400);
    });

  });
})();
