// -----------------------------
// ✨ ヒーロー画像の関数
// -----------------------------
const hero = document.getElementById('hero');
const heroText = document.getElementById('heroText');
const heroSubtext = document.getElementById('heroSubtext');

const heroPatterns = [
  {
    bg: './img/open1.webp',
    text: `<h1>Life Revolution</h1><h2>サステナブルな住環境</h2>`,
    subtext: `<h3>持続可能な街</h3><h2>東宝町エリア、最後の新築分譲</h2>`
  },
  {
    bg: './img/open2.webp',
    text: `<h1>Short Access</h1><h2>『東宝町』駅徒歩3分</h2>`,
    subtext: `<h3>東京駅直結</h3><h2>3駅4線を利用可能</h2>`
  },
  {
    bg: './img/open3.webp',
    text: `<h1>New Standard</h1><h2>利便性という贅沢</h2>`,
    subtext: `<h2>時間の余裕が生む、人との繋がり</h2>`
  }
];

let current = 0;

const showNextHero = () => {
  const pattern = heroPatterns[current];

  // テキストを非表示にして初期状態にリセット
  heroText.style.opacity = '0';
  heroText.style.clipPath = 'circle(0% at 50% 50%)'; // 初期状態: 中央から0%
  heroSubtext.style.opacity = '0';
  heroSubtext.style.clipPath = 'circle(0% at 50% 50%)'; // 初期状態: 中央から0%

  // 背景画像の切り替えを遅延させる
  setTimeout(() => {
    hero.style.backgroundImage = `url(${pattern.bg})`; // 背景画像を更新
  }, 500); // テキストが非表示になるタイミングに合わせる

  setTimeout(() => {
    // テキストを更新
    heroText.innerHTML = pattern.text;
    heroSubtext.innerHTML = pattern.subtext;

    // テキストを表示してアニメーションを開始
    heroText.style.opacity = '1';
    heroText.style.clipPath = 'circle(150% at 50% 50%)'; // 最終状態: 全体を覆う
    heroSubtext.style.opacity = '1';
    heroSubtext.style.clipPath = 'circle(150% at 50% 50%)'; // 最終状態: 全体を覆う
  }, 1000); // 背景画像の切り替え後にテキストを表示

  // 次のパターンへ
  current = (current + 1) % heroPatterns.length;
};

// 初期表示と定期的な切り替えは、下に移動
// setInterval(showNextHero, 5000);

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

// -----------------------------
// ✨ 関数の呼び出し
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {

  showNextHero();
  setInterval(showNextHero, 5000); 
  HumNav(); 
  FadeIn(); // 関数名を修正
  // ModalByTime();
  //FooterFixedButton();

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
