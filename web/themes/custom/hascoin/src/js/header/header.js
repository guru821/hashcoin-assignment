(function ($, Drupal, drupalSettings) {
  "use strict";
  Drupal.behaviors.healsecurity = {
    attach: function (context, settings) {
      // Custom code to be run on page load and on Ajax load
      $(".news-event-secton .view-news-events .view-content").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        centerPadding: "50px",
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:
          "<button type='button' class='slick-prev pull-left'>Prev</button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right'>Next</button>",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

      $(".logo-craousel").slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
      var offSetTop = 100;
      var $scrollToTopButton = $(".scrollToTop");
      //Check to see if the window is top if not then display button
      $(window).scroll(function () {
        if ($(this).scrollTop() > offSetTop) {
          $scrollToTopButton.fadeIn();
        } else {
          $scrollToTopButton.fadeOut();
        }
      });

      //Click event to scroll to top
      $scrollToTopButton.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
      });
    },
  };
})(jQuery, Drupal);
