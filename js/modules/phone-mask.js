'use strict';

(function () {
  var createMask = window.IMask;
  var inputPhone = document.getElementById('phone');

  if (inputPhone) {
    createMask(
        inputPhone, {
          mask: '+{7} (000) 000-00-00'
        }
    );
  }
})();
