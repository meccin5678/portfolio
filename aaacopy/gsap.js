// ScrollTriggerプラグインを登録
gsap.registerPlugin(ScrollTrigger);

// .fadeLeftクラスの要素を左からフェードインアニメーション
gsap.utils.toArray(".fadeLeft").forEach((element) => {
  gsap.from(element, {
    x: -100,              // 左から
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    force3D: false,       // 3D変換を無効にしてz-indexへの影響を軽減
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

// .fadeRightクラスの要素を右からフェードインアニメーション
gsap.utils.toArray(".fadeRight").forEach((element) => {
  gsap.from(element, {
    x: 100,               // 右から
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    force3D: false,       // 3D変換を無効にしてz-indexへの影響を軽減
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

// 通常の.fadeクラス（上からフェードイン）も残しておく場合
gsap.utils.toArray(".fade").forEach((element) => {
  gsap.from(element, {
    y: 50,                // 上から
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    force3D: false,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});