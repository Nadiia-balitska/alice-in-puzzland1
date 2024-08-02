const swiper = new Swiper('.horisontal-swiper-container', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  allowTouchMove: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 2.5,
    },
  },
});
