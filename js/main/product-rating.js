'use strict';

(function () {
  var rating = document.querySelector('.product__rating');

  if (rating) {
    rating.addEventListener('click', function (evt) {
      var target = evt.target;
      if (target.classList.contains('product__rating-star')) {
        var active = rating.querySelector('.product__rating-star--active');
        active.classList.remove('product__rating-star--active');
        target.classList.add('product__rating-star--active');
      }
    });
  }
})();
