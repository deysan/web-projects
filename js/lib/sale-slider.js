'use strict';

(function () {
  var sale = document.querySelector('.sale');
  if(sale) {
    sale.classList.remove('sale--nojs');
  }

  var setSaleSlider = function () {
    var breakpoint = window.matchMedia('(min-width: 768px)');
    var saleSlider;

    var breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (saleSlider) {
          saleSlider.destroy(true, true);
        }
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };

    var enableSwiper = function () {
      saleSlider = new Swiper('.sale__slider', {
        pagination: {
          el: '.sale__slider-pagination',
          type: 'fraction',
        },

        scrollbar: {
          el: '.sale__slider-scrollbar',
        },
      });
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  };

  var saleSliderBlock = document.querySelector('.sale__slider');
  if (saleSliderBlock) {
    setSaleSlider();
  }
})();
