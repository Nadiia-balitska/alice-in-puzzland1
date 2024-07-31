document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },
    allowTouchMove: true,
  });
});
