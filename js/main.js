// スライダー
const heroSwiper = new Swiper('.hero-swiper', {
  loop:true,
  autoplay:{delay:4000, disableOnInteraction:false},
  pagination:{el:'.swiper-pagination', clickable:true},
  navigation:{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'},
  effect:'fade',
  speed:1000,
});

// モーダル初期化
MicroModal.init();

// スクロールアニメーション
ScrollReveal().reveal('.card', { 
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  interval: 200
});
ScrollReveal().reveal('.service', { 
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  interval: 200
});
ScrollReveal().reveal('#contact', { 
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out'
});
