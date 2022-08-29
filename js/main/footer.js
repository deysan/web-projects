'use strict';

(function () {
  var footerToggles = document.querySelectorAll('.page-footer__accordeon-container button');
  var pageFooterSections = document.querySelectorAll('.page-footer__sections div');

  footerToggles.forEach(function (footerToggle) {
    footerToggle.addEventListener('click', onToggleClicked);
  });

  function onToggleClicked(e) {
    var section = e.target.closest('.page-footer__accordeon-container').parentElement;
    if (section.classList.contains('page-footer__accordeon--opened')) {
      section.classList.remove('page-footer__accordeon--opened');
    } else {
      pageFooterSections.forEach(function (pageFooterSection) {
        pageFooterSection.classList.remove('page-footer__accordeon--opened');
      });
      section.classList.add('page-footer__accordeon--opened');
    }
  }
})();
