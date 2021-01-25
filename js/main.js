$(document).ready(function(){
  $('.main-navigation__item--options').mouseover(function(){
    $(this).addClass('main-navigation__item--options-visible');
  });

  $('.main-navigation__item--options').mouseout(function(){
    $(this).removeClass('main-navigation__item--options-visible');
  });

  $('.showcase').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
  })

  $('.trust__partners').slick({
    arrows: true,
    appendArrows: false,
    prevArrow: $('.trust__shevron--left'),
    nextArrow: $('.trust__shevron--right'),
    slidesToShow: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
