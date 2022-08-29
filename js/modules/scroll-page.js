'use strict';

(function () {
  var sections = document.querySelectorAll('[data-block]');

  if (!sections) {
    return;
  }

  var halfHeightWindow = window.innerHeight / 2;

  var getPosition = function (blocks) {
    var position = [];
    for (var i = 0; i < blocks.length; i++) {
      position[i] = {
        name: blocks[i].dataset.block,
        position: blocks[i].getBoundingClientRect().top,
      };
    }
    return position;
  };

  var checkPosition = function (blocks) {
    var block = false;
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].position >= 0 && blocks[i].position <= halfHeightWindow) {
        block = blocks[i].name;
      }
    }
    return block;
  };

  var sectionPosition = getPosition(sections);
  var activeBlock = checkPosition(sectionPosition);

  var onScroll = function () {
    sectionPosition = getPosition(sections);
    if (
      activeBlock !== checkPosition(sectionPosition) &&
      checkPosition(sectionPosition)
    ) {
      activeBlock = checkPosition(sectionPosition);
      var oldActiveLink = document.querySelector('.main-nav__link--active');
      var newActiveLink = document.querySelector(
        '[href="#' + activeBlock + '"]'
      );
      oldActiveLink.classList.remove('main-nav__link--active');
      newActiveLink.classList.add('main-nav__link--active');
    }
  };

  window.addEventListener('scroll', onScroll);
})();
