// -----------------------------
// ✨ ヒーロー画像の関数
// -----------------------------
// JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById('hero');
  const heroText = document.getElementById('heroText');
  const heroSubtext = document.getElementById('heroSubtext');

  const heroPatterns = [
    {
      bg: './img/open1.webp',
      text: `<h1>Life Revolution</h1><h2>東宝町PROJECT、始動</h2>`,
      subtext: `<h3>都会のオアシス</h3><h2>時間のゆとりと自然の豊かさ</h2><h2>利便性という贅沢</h2>`
    },
    {
      bg: './img/open2.webp',
      text: `<h1>Short Access</h1><h2>東京駅直結</h2>`,
      subtext: `<h3>北西線・高良大線</h3><h2>『東宝町』駅徒歩3分</h2><h2>3駅4線を利用可能</h2>`
    },
    {
      bg: './img/open3.webp',
      text: `<h1>New Standard</h1><h2>未来を見据えた暮らし</h2>`,
      subtext: `<h3>サステナブルな生活</h3><h2>緑豊かな環境</h2><h2>自然との共存で得られる幸せ</h2>`
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
    }, 1000); // 遅延時間を調整
  
    // 次のパターンへ
    current = (current + 1) % heroPatterns.length;
  };

  // 初期表示と定期的な切り替え
  showNextHero();
  setInterval(showNextHero, 5000);
});
// -----------------------------
// ✨ ふわっと表示の初期化
// -----------------------------


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
// document.addEventListener("DOMContentLoaded", () => {
    // heroAction();
//     FadeInEffect();
//     Swiper();
//     ModalByTime();
//     FooterFixedButton();
//     HamburgerMenu(); 
// });
