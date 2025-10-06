const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  effect: 'fade',
  speed: 1000,
  on: {
    init: function() {
      // 最初のスライドのh1にactiveを付ける（フェードイン状態）
      const firstSlide = this.slides[this.activeIndex];
      const h1 = firstSlide.querySelector('.overlay h1');
      if(h1) h1.classList.add('active');
    },
    slideChangeTransitionStart: function () {
      // 現在のスライドのh1をフェードアウト（active外す）
      const currentSlide = this.slides[this.activeIndex];
      const h1 = currentSlide.querySelector('.overlay h1');
      if (h1) {
        h1.classList.remove('active');
      }
    },
    slideChangeTransitionEnd: function () {
      // 全スライドのh1のactiveを外す（念のため）
      this.slides.forEach(slide => {
        const h1 = slide.querySelector('.overlay h1');
        if (h1) {
          h1.classList.remove('active');
        }
      });

      // 次のスライドのh1にactiveを付ける（フェードイン）
      const nextSlide = this.slides[this.activeIndex];
      const h1 = nextSlide.querySelector('.overlay h1');
      if (h1) {
        h1.classList.add('active');
      }
    }
  }
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
