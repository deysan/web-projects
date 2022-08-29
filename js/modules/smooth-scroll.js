'use strict';

(function () {
  var anchorLinks = document.querySelectorAll('a[href^="#"]:not([href$="#"])');


  if (window.smoothscroll) {
    window.__forceSmoothScrollPolyfill__ = true;
    window.smoothscroll.polyfill();
  }

  var initScrollThrough = function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var currentSection = document.querySelector(event.target.hash);

      if (currentSection) {
        currentSection.scrollIntoView({behavior: 'smooth'});
      }
    });
  };

  var initAnchors = function (links) {
    for (var i = 0; i < links.length; i++) {
      initScrollThrough(links[i]);
    }
  };

  initAnchors(anchorLinks);

  window.checkWebpSupport();
})();
