$(function (){


//Slick
  $slick_slider = $('.game__slider-slick');
  settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  centerPadding: '30px',
  adaptiveHeight: true,

  responsive: [
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '20px',
      }
    },
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '20px',
      }
    },
  ]
  }

//   $slick_slider = $('.game__slider-slick-adventure');
//   settings = {
//   dots: false,
//   arrows: true,
//   infinite: true,
//   centerMode: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   mobileFirst: true,
//   centerPadding: '30px',
//   adaptiveHeight: true,

//   responsive: [
//     {
//       breakpoint: 700,
//       settings: {
//         arrows: false,
//         infinite: true,
//         adaptiveHeight: true,
//         centerMode: true,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         centerPadding: '20px',
//       }
//     },
//   ]
// }


$slick_slider.slick(settings);

$(window).on('resize', function() {
  if ($(window).width() < 300) {
    if ($slick_slider.hasClass('slick-initialized')) {
      $slick_slider.slick('unslick');
    }
    return
  }

  if (!$slick_slider.hasClass('slick-initialized')) {
    return $slick_slider.slick(settings);
  }
});
//


//Burger
    $('#burger-button').on('click', function() {
        $('.nav').toggleClass('nav--burger');
        $('.btn').toggleClass('btn--burger');
        $('.burger__button-item').toggleClass('active');
    });

    $(window).on('resize', function() {
        const currentWindowWidth = $(this).innerWidth();

        if (currentWindowWidth > 767 &&  $('.nav').hasClass('nav--burger') && $('.btn').hasClass('btn--burger')) {
          $('.nav').removeClass('nav--burger')
          $('.btn').removeClass('btn--burger')
        }
    });
//

//Sidebar
    $(window).on('scroll', function() {
      var top = $(document).scrollTop();
      if (top < 1800) $(".about__sidebar").removeClass('sidebar-fixed');
      else if (top > 2330) $(".about__sidebar").removeClass('sidebar-fixed');
      else $(".about__sidebar").addClass('sidebar-fixed');
    });
//

//Carousel
    $('#carousel-games').carousel({
      interval : false,
    });

    $('#carousel-description').carousel({
      interval : false,
      pause: true,
    });

    $("#carousel-horizon").carousel({
      interval : false,
      pause: true,
    });
//
//Swipe 

    $( "#carousel-horizon  .carousel-inner" ).swipe( {
          swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
            this.parent( ).carousel( 'next' );
          },
          swipeRight: function ( ) {
            this.parent( ).carousel( 'prev' );
          },
          threshold: 0,
          tap: function(event, target) {
            window.location = $(this).find('.carousel-item.active a').attr('href');
          },
          excludedElements:"label, button, input, select, textarea, .noSwipe"
    });
    
    $('#carousel-horizon .carousel-inner').on('dragstart', 'a', function () {
      return false;
    }); 
    
    
    $( "#carousel-description  .carousel-inner" ).swipe( {
      swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
        this.parent( ).carousel( 'next' );
      },
      swipeRight: function ( ) {
        this.parent( ).carousel( 'prev' );
      },
      threshold: 0,
      tap: function(event, target) {
        window.location = $(this).find('.carousel-item.active a').attr('href');
      },
      excludedElements:"label, button, input, select, textarea, .noSwipe"
    });

    $('#carousel-description .carousel-inner').on('dragstart', 'a', function () {
        return false;
    });  
//

//Modal
    $('#modal-register').modal({
      'show' : false,
    });

    $('#modal-login').modal({
      'show' : false,
    });
//    

//Accordion
    $('.accordion-item-title').on('click', function() {
      var $item = $(this).parents('.accordion-item');
      
      $item.toggleClass('accordion-item--active').siblings('.accordion-item--active').removeClass('accordion-item--active');
    });
//
});