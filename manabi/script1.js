'use strict'
// -------------------------自動再生-----------------------------
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  // effect: 'cube',
  loop: true,
  // loopAdditionalSlides:2,
  speed: 2000,


  autoplay: {
    delay: 0,
    // ループの進行方向を逆
    // reverseDirection: true 
  },

  breakpoints:{
    800: {
      slidesPerView: 6,
    },
    640: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    }
  },
});
// -------------------------逆再生-----------------------------
const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  // loopAdditionalSlides:2,
  speed: 2000,

  autoplay: {
    delay: 0,
    // ループの進行方向を逆
    reverseDirection: true 
  },

  breakpoints:{
    800: {
      slidesPerView: 6,
    },
    640: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    }
  },
});

// -------------------------cube-----------------------------
const swiperCube2 = new Swiper('.swiper-cube2', {
  slidesPerView: 8,
  // direction: 'vertical',
  loop: true,
  // speed: 1000,
});

const swiperCube = new Swiper('.swiper-cube', {
  direction: 'horizontal',
  loop: true,
  effect: 'cube',
  speed: 1200,
  thumbs: {
    swiper: swiperCube2,
  }
});




