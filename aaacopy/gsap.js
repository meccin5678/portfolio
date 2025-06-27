// ScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger);

// ページ内リンクでのジャンプを検知する関数
function handlePageJump() {
  // 現在のURLにハッシュがある場合（ページ内リンク）
  if (window.location.hash) {
    setTimeout(() => {
      ScrollTrigger.refresh(); // ScrollTriggerを再計算
      
      // 画面内にある要素のアニメーションを即座に完了
      gsap.utils.toArray(".fadeLeft, .fadeRight, .fade").forEach(element => {
        const rect = element.getBoundingClientRect();
        // 要素が画面内にある場合、アニメーションを完了状態にする
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          gsap.set(element, { opacity: 1, x: 0, y: 0 });
        }
      });
    }, 100);
  }
}

// レスポンシブ設定
const isMobile = window.innerWidth < 768;
const triggerStart = isMobile ? "top 99%" : "top 85%";
const DEBUG = false;

// .fadeLeft
gsap.utils.toArray(".fadeLeft").forEach(element => {
  gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: triggerStart,
      toggleActions: "play none none reverse",
      markers: DEBUG
    }
  });
});

// .fadeRight
gsap.utils.toArray(".fadeRight").forEach(element => {
  gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: triggerStart,
      toggleActions: "play none none reverse"
    }
  });
});

// .fade
gsap.utils.toArray(".fade").forEach(element => {
  gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: triggerStart,
      toggleActions: "play none none reverse"
    }
  });
});

// ページ読み込み時とハッシュ変更時に実行
window.addEventListener('load', handlePageJump);
window.addEventListener('hashchange', handlePageJump);

// ナビゲーションリンクがクリックされた時の処理
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(handlePageJump, 300); // スムーススクロール完了後に実行
  });
});