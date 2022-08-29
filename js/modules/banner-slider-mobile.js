'use strict';

(function () {
  var bannerInputs = document.querySelectorAll('.radio-slider__item input');
  var bannerSlideContainer = document.querySelector('.banner__wrapper-slider');
  var bannerSlideList = document.querySelector('.banner__radio-slider');
  var bannerSlideItems = document.querySelectorAll('.radio-slider__item');

  var MOBILE_WIDTH = 767;

  var toggleClass = function (element, newClass, add) {
    if (element) {
      element.classList.toggle(newClass, add);
    }
  };

  var toggleClassToList = function (elements, newClass, add) {
    if (elements) {
      for (var i = 0; i < elements.length; i++) {
        toggleClass(elements[i], newClass, add);
      }
    }
  };

  var disableRadio = function (elements) {
    if (elements) {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
          elements[i].checked = false;
        }
        elements[i].disabled = true;
      }
    }
  };

  var enableRadio = function (elements) {
    if (elements) {
      for (var i = 0; i < elements.length; i++) {
        if (i === 0) {
          elements[i].checked = true;
        }
        elements[i].disabled = false;
      }
    }
  };

  var toggleSwiperClasses = function (container, wrapper, items, add) {
    toggleClass(container, 'swiper-container', add);
    toggleClass(wrapper, 'swiper-wrapper', add);
    toggleClassToList(items, 'swiper-slide', add);
  };

  var handleWindowResize = function () {
    if (window.innerWidth <= MOBILE_WIDTH) {
      if (window.sliderBanner) {
        return;
      }

      disableRadio(bannerInputs);
      toggleSwiperClasses(bannerSlideContainer, bannerSlideList, bannerSlideItems, true);

      window.sliderBanner = new window.Swiper('.banner__wrapper-slider', {
        navigation: {
          nextEl: '.banner__slider-button--next',
          prevEl: '.banner__slider-button--prev',
        },
        loop: true
      });
    } else {
      if (!window.sliderBanner) {
        return;
      }

      window.sliderBanner.destroy();

      window.sliderBanner = null;

      enableRadio(bannerInputs);
      toggleSwiperClasses(bannerSlideContainer, bannerSlideList, bannerSlideItems, false);
    }
  };

  handleWindowResize();

  window.addEventListener('resize', window.debounce(handleWindowResize, 1000));
})();
