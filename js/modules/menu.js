'use strict';

(function () {
  var MOBILE_WIDTH = 767;

  var buttonMenu = document.querySelector('.main-header__sandwich-button');
  var containerContent = document.querySelector('.content-wrapper');
  var logo = document.querySelector('.main-header__logo');
  var buttonRow = document.querySelector('.main-header__button-row');
  var links = document.querySelectorAll('.main-header__navigation .menu__link');
  var menu = document.querySelector('.main-header__navigation');
  var main = document.querySelector('.main-content');
  var footer = document.querySelector('.main-footer');
  var isClickSubscribed = false;

  var handleMenuClick = function () {
    if (containerContent) {
      containerContent.classList.toggle('content-wrapper--open-menu');
    }
    if (logo) {
      logo.classList.toggle('main-header__logo--open-menu');
    }
    if (buttonRow) {
      buttonRow.classList.toggle('main-header__button-row--open-menu');
    }
    if (menu) {
      menu.classList.toggle('main-header__navigation--open-menu');
    }
    if (main) {
      main.classList.toggle('main-content--open-menu');
    }
    if (footer) {
      footer.classList.toggle('main-footer--open-menu');
    }
  };

  var handleWindowResize = function () {
    if (window.innerWidth <= MOBILE_WIDTH) {
      if (buttonMenu && !isClickSubscribed) {
        buttonMenu.addEventListener('click', handleMenuClick);
        isClickSubscribed = true;
      }
    } else if (isClickSubscribed) {
      buttonMenu.removeEventListener('click', handleMenuClick);
      isClickSubscribed = false;
    }

  };

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', handleMenuClick);
  }

  handleWindowResize();

  window.addEventListener('resize', window.debounce(handleWindowResize, 1000));
})();
