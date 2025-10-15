/* ============================= */
/* Swiper（ヒーロースライダー）の初期化 */
/* ============================= */
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true, // スライドをループさせる（最後まで行ったら最初に戻る）
  autoplay: {
    delay: 4000, // 4秒ごとに自動でスライド切り替え
    disableOnInteraction: false, // ユーザー操作後も自動再生を停止しない
  },
  pagination: {
    el: '.swiper-pagination', // ページネーション（丸いドット）
    clickable: true,           // ドットをクリックすると該当スライドへ移動
  },
  navigation: {
    nextEl: '.swiper-button-next', // 次へボタン
    prevEl: '.swiper-button-prev', // 前へボタン
  },
  effect: 'fade', // フェード切り替え効果
  speed: 1000,    // 切り替え速度1秒
  on: {
    // 初期化時に最初のスライドのh1だけに「active」を付ける
    init: function() {
      this.slides.forEach(slide => {
        const h1 = slide.querySelector('.overlay h1');
        if (h1) h1.classList.remove('active');
      });
      const firstSlide = this.slides[this.activeIndex];
      const h1 = firstSlide.querySelector('.overlay h1');
      if (h1) h1.classList.add('active');
    },
    // スライドが変わり始めた時、前のスライドのh1からactiveを外す（フェードアウト用）
    slideChangeTransitionStart: function () {
      const previousSlide = this.slides[this.previousIndex];
      const h1Prev = previousSlide.querySelector('.overlay h1');
      if (h1Prev) h1Prev.classList.remove('active');
    },
    // スライド切り替え完了時、現在のスライドのh1にactiveを付ける（フェードイン用）
    slideChangeTransitionEnd: function () {
      const currentSlide = this.slides[this.activeIndex];
      const h1Curr = currentSlide.querySelector('.overlay h1');
      if (h1Curr) h1Curr.classList.add('active');
    }
  }
});


/* ============================= */
/* MicroModal（モーダルウィンドウ）の初期化 */
/* ============================= */
MicroModal.init();


/* ============================= */
/* ScrollReveal（スクロールアニメーション）の設定 */
/* ============================= */

// 共通設定（距離、イージングなど）をパターンごとに分けて記述

// カード（作品など）を下からふわっと出現させる
ScrollReveal().reveal('.card', { 
  distance: '50px',
  duration: 1000,
  origin: 'bottom',
  easing: 'ease-in-out',
  interval: 200 // 複数要素は順に遅延しながら表示
});

// サービスセクションは少し短めのアニメーションで下から
ScrollReveal().reveal('.service', { 
  distance: '40px',
  duration: 800,
  origin: 'bottom',
  easing: 'ease-out',
  interval: 200,
  opacity: 0
});

// お問い合わせフォームも下から
ScrollReveal().reveal('#contact', { 
  distance: '50px',
  duration: 1000,
  origin: 'bottom',
  easing: 'ease-in-out'
});

// Aboutセクションの複数要素は左右から順に出す
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


/* ============================= */
/* YouTubeサムネページ専用アニメーション */
/* ============================= */

// 作品カードは下からふわっと
ScrollReveal().reveal('.work-card', { 
  distance: '60px',
  origin: 'bottom',
  duration: 1000,
  easing: 'ease-out',
  opacity: 0,
  interval: 200
});

// サービスは左右交互にスライドイン
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

// CTA（お問い合わせ誘導）を下から大きく表示
ScrollReveal().reveal('#contact-cta', { 
  distance: '100px',
  origin: 'bottom',
  duration: 1500,
  easing: 'ease-in-out',
  opacity: 0,
  delay: 300
});


/* ============================= */
/* IntersectionObserverによるサービスカードのフェードイン */
/* ============================= */
const serviceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // .visibleクラスを付けてCSSのアニメーションを起動
    }
  });
}, { threshold: 0.3 }); // 30%見えたら反応

// すべての.serviceに監視を設定
document.querySelectorAll('.service').forEach(el => {
  serviceObserver.observe(el);
});


/* ============================= */
/* ハンバーガーメニューの開閉制御 */
/* ============================= */

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuLinks = document.querySelectorAll('.nav-menu a'); // メニューリンクをすべて取得
const hamburger = document.querySelector('.menu-toggle .hamburger'); // ハンバーガーアイコン

menuToggle.addEventListener('click', () => {
  // nav-menuのopenクラスをトグル（付け外し）
  navMenu.classList.toggle('open');

  // メニューが開いた場合は、ハンバーガーアイコンを「閉じるアイコン」に変更
  const isOpen = navMenu.classList.contains('open');
  hamburger.classList.toggle('close', isOpen); // ハンバーガーアイコン → 閉じるアイコン（×）

  // アクセシビリティのためaria-expanded属性を切り替え
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// メニューリンクがクリックされたときにメニューを閉じる処理
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // メニューを閉じる
    navMenu.classList.remove('open');
    
    // ハンバーガーアイコンを元に戻す
    hamburger.classList.remove('close');
    
    // ボタンを再表示
    menuToggle.style.display = 'block';
    
    // aria-expanded属性を閉じた状態に戻す
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});






