import "./style.scss";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

var swiper = new Swiper(".mySwiper-1", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    999: {
      slidesPerView: 3,
      spaceBetweenSlides: 40,
    },
  },
});

// init Swiper:
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
