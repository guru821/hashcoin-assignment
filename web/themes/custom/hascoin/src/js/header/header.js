(function ($) {
  Drupal.behaviors.initSlider = {
    attach: function (context, settings) {
      // Your custom JavaScript goes inside this function...
      $(".slick-slider").slick({
        dots: true,
        speed: 300,
        autoplay: true,
      });
    },
  };
})(jQuery);
