'use strict';

(function () {
  var filterToggle = document.querySelector('.top-filters__sorting-mobile button');
  var backFilters = document.querySelector('.form-models__back');
  var body = document.body;

  if (filterToggle) {
    filterToggle.addEventListener('click', function () {
      if (body) {
        if (body.classList.contains('filter-opened')) {
          body.classList.remove('filter-opened');
        } else {
          body.classList.add('filter-opened');
        }
      }
    });
  }

  if (backFilters) {
    backFilters.addEventListener('click', function () {
      if (body) {
        if (body.classList.contains('filter-opened')) {
          body.classList.remove('filter-opened');
        }
      }
    });
  }

  var minPrice = document.getElementById('min-price-mask');
  var maxPrice = document.getElementById('max-price-mask');
  var previousMinPriceValue;
  var previousMaxPriceValue;

  function parsePrice(inputValue) {
    return parseInt(inputValue.replace(/ /g, ''), 10);
  }

  if (minPrice) {
    minPrice.addEventListener('focus', function (evt) {
      previousMinPriceValue = evt.target.value;
    });

    minPrice.addEventListener('blur', function (evt) {
      var newMinPrice = parsePrice(evt.target.value);
      if (newMinPrice < parsePrice(maxPrice.value)) {
        var newX = newMinPrice / (maxPriceValue - minPriceValue) * scale.clientWidth;
        updateMin(newX);
      } else {
        evt.target.value = previousMinPriceValue;
      }
    });
  }

  if (maxPrice) {
    maxPrice.addEventListener('focus', function (evt) {
      previousMaxPriceValue = evt.target.value;
    });
    maxPrice.addEventListener('blur', function (evt) {
      var newMaxPrice = parsePrice(evt.target.value);
      if (newMaxPrice > parsePrice(minPrice.value)) {
        var newX = newMaxPrice / (maxPriceValue - minPriceValue) * scale.clientWidth;
        updateMax(newX);
      } else {
        evt.target.value = previousMaxPriceValue;
      }
    });
  }

  var sliderContainer = document.querySelector('.left-filter__price--fieldset');
  var sliderMin = document.querySelector('.left-filter__range-toggle--min');
  var sliderMax = document.querySelector('.left-filter__range-toggle--max');
  var scale = document.querySelector('.left-filter__scale');
  var sliderBar = document.querySelector('.left-filter__bar');
  var minPriceValue = 0;
  var maxPriceValue = 30000;
  var minMoving = false;
  var maxMoving = false;

  if (sliderMin) {
    sliderMin.addEventListener('mousedown', function () {
      minMoving = true;
    });
  }

  if (sliderMax) {
    sliderMax.addEventListener('mousedown', function () {
      maxMoving = true;
    });
  }

  document.addEventListener('mousemove', function (evt) {
    if (minMoving || maxMoving) {
      var newX = evt.clientX - sliderContainer.offsetLeft;
      var newPrice = Math.floor((maxPriceValue - minPriceValue) * newX / scale.clientWidth);
      if (minMoving && newX >= 0 && newX < sliderMax.offsetLeft) {
        updateMin(newX);
        minPrice.value = newPrice;
      }
      if (maxMoving && newX >= sliderMin.offsetLeft && newX <= scale.clientWidth) {
        updateMax(newX);
        maxPrice.value = newPrice;
      }
    }
  });

  function updateMin(newX) {
    sliderMin.style.left = newX + 'px';
    sliderBar.style.marginLeft = sliderMin.style.left;
    sliderBar.style.width = (sliderMax.offsetLeft - newX) + 'px';
  }

  function updateMax(newX) {
    sliderMax.style.left = newX + 'px';
    sliderBar.style.width = (newX - sliderMin.offsetLeft) + 'px';
  }

  document.addEventListener('mouseup', function (evt) {
    minMoving = false;
    maxMoving = false;
    if (!evt.target.closest('.custom-select')) {
      closeAllSelects();
    }
  });

  var accordeonCloseButtons = document.querySelectorAll('.left-filter__accordion-close');

  accordeonCloseButtons.forEach(function (closeButton) {
    closeButton.addEventListener('click', function (evt) {
      var siblings = evt.target.parentNode.childNodes;
      siblings.forEach(function (sibling) {
        if (sibling.classList && sibling.classList.contains('left-filter__accordion-wrapper')) {
          if (sibling.classList.contains('accordion-hidden')) {
            sibling.classList.remove('accordion-hidden');
            closeButton.classList.remove('accordion-close-button');
          } else {
            sibling.classList.add('accordion-hidden');
            closeButton.classList.add('accordion-close-button');
          }
        }
      });
    });
  });

  var resetAll = document.querySelector('.left-filter__reset');
  var checkBoxes = document.querySelectorAll('.left-filter__option>input[type=checkbox]');

  if (resetAll) {
    resetAll.addEventListener('click', function () {
      checkBoxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
      minPrice.value = 2000;
      maxPrice.value = 12000;
      updateMin(18);
      updateMax(108);
    });
  }

  var selectButtons = document.querySelectorAll('.custom-select__title');
  selectButtons.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      var select = evt.target.closest('.custom-select');
      if (select.classList.contains('select-opened')) {
        select.classList.remove('select-opened');
      } else {
        select.classList.add('select-opened');
      }
    });
  });

  var selectOptions = document.querySelectorAll('.custom-select li');
  selectOptions.forEach(function (option) {
    option.addEventListener('click', function (evt) {
      var select = evt.target.closest('.custom-select');
      select.classList.remove('select-opened');
      var selectedValue = evt.target.getAttribute('data-value');
      var hidden = document.querySelector('#' + select.id + ' input[type=hidden]');
      hidden.value = selectedValue;

      var button = document.querySelector('#' + select.id + ' .custom-select__title');
      button.innerHTML = selectedValue;

      var lis = document.querySelectorAll('#' + select.id + ' li');
      lis.forEach(function (li) {
        li.classList.remove('selected');
      });
      evt.target.classList.add('selected');
    });
  });

  var selects = document.querySelectorAll('.custom-select');

  function closeAllSelects() {
    selects.forEach(function (select) {
      select.classList.remove('select-opened');
    });
  }

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      closeAllSelects();
    }
  };

})();
