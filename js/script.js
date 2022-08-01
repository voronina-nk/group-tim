$(document).ready(function () {
  $('.partners__carousel').slick({
    // infinite: false,
    speed: 800,
    arrows: false,
    autoplay: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendArrows: $('.partners__nav'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
                 
    ]
  });
});

document.querySelector('video').playbackRate = 4.0;


$('ul.portfolio__tabs').on('click', 'li:not(.portfolio__tab_active)', function () {
  $(this)
    .addClass('portfolio__tab_active').siblings().removeClass('portfolio__tab_active')
    .closest('section.portfolio').find('div.portfolio__content').removeClass('portfolio__content_active').eq($(this).index()).addClass('portfolio__content_active');
});


$('ul.services__tabs').on('click', 'li:not(.services__tab_active)', function () {
  $(this)
    .addClass('services__tab_active').siblings().removeClass('services__tab_active')
    .closest('section.services').find('div.services__content').removeClass('services__content_active').eq($(this).index()).addClass('services__content_active');
});


$(document).ready(function () {
  $('.reviews__carousel').slick({
    // infinite: false,
    speed: 800,
    arrows: false,
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('.reviews__nav'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  });
});