"use strict";

// check if touch device
function isTouchDevice() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  var mq = function mq(query) {
    return window.matchMedia(query).matches;
  };

  if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

if (isTouchDevice()) {
  $('body').addClass('touch-device');
} // header


(function () {
  var header = $('.js-header'),
      burger = header.find('.js-header-burger'),
      wrapper = header.find('.js-header-wrapper'),
      html = $('html'),
      body = $('body');
  burger.on('click', function () {
    burger.toggleClass('active');
    wrapper.toggleClass('visible');
    html.toggleClass('no-scroll');
    body.toggleClass('no-scroll');
  });
})(); // carousel arrows


var navArrows = ["\n    <span>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"14\" fill=\"none\" viewBox=\"0 0 8 14\">\n            <path fill-rule=\"evenodd\" d=\"M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z\" fill=\"#9f9fa9\"/>\n        </svg>\n    </span>", "<span>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"14\" fill=\"none\" viewBox=\"0 0 8 14\">\n            <path fill-rule=\"evenodd\" d=\"M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z\" fill=\"#9f9fa9\"/>\n        </svg>\n    </span>\n"]; // owl carousel

$(document).ready(function () {
  var slider = $('.js-slider-details');
  slider.owlCarousel({
    items: 3,
    nav: true,
    navElement: 'button',
    navText: navArrows,
    dots: false,
    loop: true,
    smartSpeed: 700,
    responsive: {
      320: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });
  $('.js-slider-review').owlCarousel({
    items: 1,
    nav: true,
    navElement: 'button',
    navText: navArrows,
    dots: false,
    loop: true,
    smartSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      320: {
        nav: false,
        dots: true
      },
      768: {
        nav: true,
        dots: false
      }
    }
  });
  $('.js-slider-cases').owlCarousel({
    items: 2,
    nav: true,
    navElement: 'button',
    navText: navArrows,
    dots: false,
    loop: true,
    smartSpeed: 700,
    responsive: {
      320: {
        nav: false,
        dots: true,
        items: 1
      },
      768: {
        nav: true,
        dots: false,
        items: 2
      }
    }
  });
}); // owl carousel

(function () {
  var slider = $('.js-owl');

  if (slider.length) {
    slider.each(function () {
      var _this = $(this),
          itemsMobileAlbum = _this.data('items-mobile-album'),
          itemsMobilePortrait = _this.data('items-mobile-portrait');

      if (itemsMobileAlbum && itemsMobilePortrait) {
        owlMobileAlbum(_this, itemsMobileAlbum, itemsMobilePortrait);
        $(window).resize(function () {
          owlMobileAlbum(_this, itemsMobileAlbum, itemsMobilePortrait);
        });
      }

      if (!itemsMobileAlbum && itemsMobilePortrait) {
        owlMobilePortrait(_this, itemsMobilePortrait);
        $(window).resize(function () {
          owlMobilePortrait(_this, itemsMobilePortrait);
        });
      }
    });
  } // mobile album


  function owlMobileAlbum(obj, itemsMobileAlbum, itemsMobilePortrait) {
    var optionLoop = true;

    if (obj.is('[data-no-loop]')) {
      optionLoop = false;
    }

    var optionAutoHeight = false;

    if (obj.is('[data-autoheight]')) {
      optionAutoHeight = true;
    }

    var fullWidth = window.innerWidth;

    if (navigator.platform.indexOf('Win') > -1) {
      var mobilePoint = 766; // windows
    } else {
      var mobilePoint = 767; // mac os
    }

    if (fullWidth <= mobilePoint) {
      if (!obj.hasClass('owl-carousel')) {
        obj.addClass('owl-carousel');
        obj.owlCarousel({
          items: itemsMobileAlbum,
          nav: false,
          dots: true,
          loop: optionLoop,
          smartSpeed: 600,
          autoHeight: optionAutoHeight,
          responsive: {
            0: {
              items: itemsMobilePortrait
            },
            480: {
              items: itemsMobileAlbum
            }
          }
        });
      }
    } else {
      obj.removeClass('owl-carousel');
      obj.trigger('destroy.owl.carousel');
    }
  } // mobile portrait


  function owlMobilePortrait(obj, itemsMobilePortrait) {
    var optionLoop = true;

    if (obj.is('[data-no-loop]')) {
      optionLoop = false;
    }

    var optionAutoHeight = false;

    if (obj.is('[data-autoheight]')) {
      optionAutoHeight = true;
    }

    var windowWidth = $(window).width();

    if (windowWidth <= 479) {
      if (!obj.hasClass('owl-carousel')) {
        obj.addClass('owl-carousel');
        obj.owlCarousel({
          items: itemsMobilePortrait,
          nav: false,
          dots: true,
          smartSpeed: 600,
          loop: optionLoop,
          autoHeight: optionAutoHeight
        });
      }
    } else {
      obj.removeClass('owl-carousel');
      obj.trigger('destroy.owl.carousel');
    }
  }
})(); // aos animation


AOS.init(); // parallax effect

(function () {
  var parallax = $('.js-parallax');

  if (parallax.length) {
    parallax.each(function () {
      var _this = $(this),
          scale = _this.data('scale'),
          orientation = _this.data('orientation');

      new simpleParallax(_this[0], {
        scale: scale,
        orientation: orientation,
        delay: .5,
        overflow: true,
        transition: 'cubic-bezier(0,0,0,1)'
      });
    });
  }
})(); // scroll to section


(function () {
  var btn = $('.js-scroll');
  btn.click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000
    });
    return false;
  });
})();