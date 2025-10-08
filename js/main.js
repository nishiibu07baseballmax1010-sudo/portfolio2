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
  origin: 'bottom', // ← 下から出る
  easing: 'ease-in-out',
  interval: 200
});

ScrollReveal().reveal('.service', { 
  distance: '40px',
  duration: 800,
  origin: 'bottom', // ← 下から
  easing: 'ease-out',
  interval: 200,
  opacity: 0
});

ScrollReveal().reveal('#contact', { 
  distance: '50px',
  duration: 1000,
  origin: 'bottom', // ← 下から出る
  easing: 'ease-in-out'
});

// Aboutセクションのアニメーション
ScrollReveal().reveal('.about-container', { 
  distance: '60px',
  origin: 'bottom',
  duration: 1200,
  easing: 'ease-out',
  opacity: 0,
  delay: 200
});

ScrollReveal().reveal('.about-image', { 
  distance: '80px',
  origin: 'left',
  duration: 1200,
  easing: 'ease-out',
  opacity: 0,
  delay: 200
});

ScrollReveal().reveal('.about-text', { 
  distance: '80px',
  origin: 'right',
  duration: 1200,
  easing: 'ease-out',
  opacity: 0,
  delay: 400
});

// ==========================
// YouTubeサムネページ専用アニメーション
// ==========================

// 作品カード：下からふわっと出現
ScrollReveal().reveal('.work-card', { 
  distance: '60px',
  origin: 'bottom',
  duration: 1000,
  easing: 'ease-out',
  opacity: 0,
  interval: 200
});

// サービス：左右交互にスライドイン
ScrollReveal().reveal('.service:nth-child(odd)', { 
  distance: '80px',
  origin: 'bottom',
  duration: 1200,
  easing: 'ease-out',
  opacity: 0,
  interval: 200
});
ScrollReveal().reveal('.service:nth-child(even)', { 
  distance: '80px',
  origin: 'top',
  duration: 1200,
  easing: 'ease-out',
  opacity: 0,
  interval: 200
});

// CTA（お問い合わせ誘導）：下からドーンと登場
ScrollReveal().reveal('#contact-cta', { 
  distance: '100px',
  origin: 'bottom',
  duration: 1500,
  easing: 'ease-in-out',
  opacity: 0,
  delay: 300
});

// サービスカード：ふわっとフェードイン
const serviceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.service').forEach(el => {
  serviceObserver.observe(el);
});
