// ScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger);

// スマホ対応の設定を追加
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // スマホでのリフレッシュイベントを追加
});

// .fadeLeftクラスの要素を左からフェードインアニメーション
gsap.utils.toArray(".fadeLeft").forEach((element) => {
  gsap.from(element, {
    x: -100,              
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    force3D: false,       
    scrollTrigger: {
      trigger: element,
      start: "top 85%",   // スマホ用に少し早めに
      end: "bottom 20%",  // 終了位置を明示
      toggleActions: "play none none reverse",
      refreshPriority: -90, // リフレッシュ優先度を下げる
      invalidateOnRefresh: true, // リフレッシュ時に再計算
      // スマホ用の追加設定
      onRefresh: function() {
        ScrollTrigger.refresh();
      }
    }
  });
});

// .fadeRightクラスの要素を右からフェードインアニメーション
gsap.utils.toArray(".fadeRight").forEach((element) => {
  gsap.from(element, {
    x: 100,               
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    force3D: false,       
    scrollTrigger: {
      trigger: element,
      start: "top 85%",   // スマホ用に少し早めに
      end: "bottom 20%",  
      toggleActions: "play none none reverse",
      refreshPriority: -90,
      invalidateOnRefresh: true,
      onRefresh: function() {
        ScrollTrigger.refresh();
      }
    }
  });
});

// 通常の.fadeクラス（上からフェードイン）
gsap.utils.toArray(".fade").forEach((element) => {
  gsap.from(element, {
    y: 50,                
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    force3D: false,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",   
      end: "bottom 20%",  
      toggleActions: "play none none reverse",
      refreshPriority: -90,
      invalidateOnRefresh: true,
      onRefresh: function() {
        ScrollTrigger.refresh();
      }
    }
  });
});

// スマホでのリサイズ・向き変更対応
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});

window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
});