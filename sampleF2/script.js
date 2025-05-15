// -----------------------------
// ✨ ヒーロー画像の関数
// -----------------------------


// -----------------------------
// ✨ ハンバーガーメニューの初期化
// -----------------------------

const HumNav = () => {
  const nav = document.querySelector("nav");
  const hum = document.querySelector(".hum");

  if (nav && hum) {
      hum.addEventListener("click", () => {
          nav.classList.toggle("open");
          hum.classList.toggle("open");

          // navの要素を取得
          const menuItems = nav.querySelectorAll("p");
          if (nav.classList.contains("open")) {
              // 各pに遅延を設定
              menuItems.forEach((item, index) => {
                  item.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
              });
          } else {
              // 非表示時にアニメーションをリセット
              menuItems.forEach((item) => {
                  item.style.animation = "none";
              });
          }
      });
  }
};

// -----------------------------
// ✨ ふわっと表示の初期化
// -----------------------------
const FadeIn = () => {
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // 表示を遅延させる
            setTimeout(() => {
                entry.target.classList.add("visible");
            }, index * 300); // 各要素に300msずつディレイを追加
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(".fade").forEach((el) => observer.observe(el)); // idからclassに変更
};


// -----------------------------
// ✨ モーダルの初期化
// -----------------------------

// -----------------------------
// ✨ footerのfixedボタン
// -----------------------------
const FooterFixedButton = () => {
  const sec5 = document.querySelector(".sec5");
  const fixedButton = document.querySelector(".footer-fixed-btn");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              // フッターが見えたらボタンを表示
              fixedButton.classList.add("visible");
              observer.unobserve(sec5); // 一度表示したら監視を解除
          }
      });
  });

  observer.observe(sec5);
};

// -----------------------------
// ✨ 関数の呼び出し
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {

  HumNav(); 
  FadeIn();
  FooterFixedButton();
  // ModalByTime();

// -----------------------------
// ✨ Swiperの初期化（Domの中に書くのが安全）
// -----------------------------
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  effect: 'slide', // スライドエフェクトを指定（他に 'fade', 'cube', 'coverflow', 'flip' などが利用可能）
  speed: 600, // アニメーションの速度（ミリ秒）
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
  });
  
});
