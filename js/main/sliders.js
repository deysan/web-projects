
'use strict';

(function () {
  if (window.$) {
    var $ = window.$;

    var noticeSlider = $('.notice__slider');
    noticeSlider.slick({
      dots: true,
      arrows: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }]
    });

    var actionSlider = $('.notice__action');
    actionSlider.slick({
      dots: false,
      arrows: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }]
    });

    var waresPopularSlider = $('.wares--popular .wares__list');
    waresPopularSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      arrows: true,
      responsive: [{
        breakpoint: 1232,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });

    var waresSuggestionSlider = $('.wares--suggestion .wares__list');
    waresSuggestionSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      arrows: true,
      responsive: [{
        breakpoint: 1232,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }
})();
