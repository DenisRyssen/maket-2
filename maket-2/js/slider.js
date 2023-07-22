const gallary = new Swiper('.gallary', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    
    slidesPerView: 1,
    effect: "cards",
    //slidesPerView: 1.2,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
     // prevtEl: ".btn-prev",
    },
  
    // Navigation arrows
     navigation: {
      nextEl: '.btn-next',
      //prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  