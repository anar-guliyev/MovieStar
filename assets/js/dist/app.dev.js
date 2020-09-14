"use strict";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
var owl = $('.main-slider .owl-carousel');
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  animateIn: 'animate__fadeIn',
  animateOut: 'animate__fadeOut',
  autoplayTimeout: 3000,
  autoplayHoverPause: true
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [3000]);
});
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay');
});
$('.secondary-slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});
var owl = $('.release-slide.owl-carousel');
owl.owlCarousel({
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 2
    },
    600: {
      items: 4
    },
    1000: {
      items: 6
    }
  },
  dots: false,
  nav: true,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [5000]);
});
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay');
});

if ($(window).width() > 450) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('#navbar_top').addClass("fixed-top");
      $('.header .links').addClass("pad-bor");
      $('#navbar_top').addClass("sticky-header"); // add padding top to show content behind navbar

      $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
    } else {
      $('#navbar_top').removeClass("fixed-top");
      $('#navbar_top').removeClass("sticky-header");
      $('.header .links').removeClass("pad-bor"); // remove padding top from body

      $('body').css('padding-top', '0');
    }
  });
} // end if


var button = document.querySelector(".nav-activate");
var mobileNav = document.querySelector(".responsive-navbar");
button.addEventListener("click", activeButton);

function activeButton() {
  mobileNav.classList.contains(".responsive-navbar__activate") ? mobileNav.classList.remove(".responsive-navbar__activate") : mobileNav.classList.add(".responsive-navbar__activate");
}

;