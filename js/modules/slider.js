'use strict';

(function () {
  window.sliderFoodstuffs = new window.Swiper('.foodstuffs__swiper-container', {
    navigation: {
      nextEl: '.foodstuffs__slider-button--next',
      prevEl: '.foodstuffs__slider-button--prev',
    },
    loop: true,
    slidesPerView: 2.844,
    centeredSlides: true,
    spaceBetween: 17,
    breakpoints: {
      225: {
        slidesPerView: 'auto',
        spaceBetween: 0
      },
      768: {
        slidesPerView: 1.1527
      },
      1024: {
        slidesPerView: 2.844
      }
    }
  });

})();
