'use strict';

(function () {

  window.debounce = function (f, ms) {
    var timer = null;

    return function () {
      var args = arguments;

      var onComplete = function () {
        f.apply(null, args);
        timer = null;
      };

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(onComplete, ms);
    };
  };
})();
