var swiper = new Swiper('.swiper-container', {
    cssMode: true,
   spaceBetween: 0,
    centeredSlides: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      },
    loop: true,
  });