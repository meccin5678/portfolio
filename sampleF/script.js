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
      subtext: `<h3></h3><h2>時間の余裕が生む、人との繋がり</h2>`
    }
  ];

  let current = 0;

  const showNextHero = () => {
    const pattern = heroPatterns[current];
  
    // 背景画像を先に更新
    hero.style.backgroundImage = `url(${pattern.bg})`;
  
    // テキストを非表示にして初期状態にリセット
    heroText.style.opacity = '0';
    heroText.style.clipPath = 'circle(0% at 50% 50%)'; // 初期状態: 中央から0%
    heroSubtext.style.opacity = '0';
    heroSubtext.style.clipPath = 'circle(0% at 50% 50%)'; // 初期状態: 中央から0%
  
    setTimeout(() => {
      // テキストを更新
      heroText.innerHTML = pattern.text;
      heroSubtext.innerHTML = pattern.subtext;
  
      // テキストを表示してアニメーションを開始
      heroText.style.opacity = '1';
      heroText.style.clipPath = 'circle(150% at 50% 50%)'; // 最終状態: 全体を覆う
      heroSubtext.style.opacity = '1';
      heroSubtext.style.clipPath = 'circle(150% at 50% 50%)'; // 最終状態: 全体を覆う
    }, 1500); // 遅延時間を調整
  
    // 次のパターンへ
    current = (current + 1) % heroPatterns.length;
  };

  // 初期表示と定期的な切り替え
  showNextHero();
  setInterval(showNextHero, 5000);

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
// ✨ Swiperの初期化
// -----------------------------

// -----------------------------
// ✨ footerのfixedボタン
// -----------------------------

// -----------------------------
// ✨ ハンバーガーメニューの初期化
// -----------------------------


// -----------------------------
// ✨ 関数の呼び出し
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
    showNextHero();
    FadeIn(); // 関数名を修正
//     Swiper();
//     ModalByTime();
//     FooterFixedButton();
//     HamburgerMenu(); 
});
