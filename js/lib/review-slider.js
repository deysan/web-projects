'use strict';

(function () {
  var reviewSlider = '';
  var flag = false;
  var breakpoint = window.matchMedia('(max-width: 767px)');
  var breakpointChecker = function () {
    if (breakpoint.matches && flag) {
      reviewSlider.destroy(true, true);
      return;
    } else {
      reviewSlider = new Swiper('.review__slider', {
        autoHeight: true,
        pagination: {
          el: '.review__slider-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      flag = true;
      return;
    }
  };

  breakpoint.addEventListener('resize', breakpointChecker);
  breakpointChecker();
})();
