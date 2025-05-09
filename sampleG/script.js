document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // ✨ ヒーローエリアのアニメーション（画像とテキスト）
  const heroTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero", // ヒーローエリアがトリガー
      start: "top 80%", // トリガーが画面の80%位置に来たら発火
    },
  });

  heroTimeline
    .from("#heroImg", {
      scale: 1.2, // 拡大状態から開始
      opacity: 0, // 透明から開始
      duration: 1.5, // アニメーション時間
      ease: "power2.out", // イージング
    })
    .from("#heroText", {
      scale: 1.2, // 拡大状態から開始
      opacity: 0, // 透明から開始
      duration: 1.5, // アニメーション時間
      ease: "power2.out", // イージング
    }, "-=0.5"); // 前のアニメーションと0.5秒重ねる

  // ✨ GSAP 実感レポート
  gsap.utils.toArray(".secFlex").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // ✨ GSAP 原材料
  gsap.fromTo(
    "#fade",
    {
      rotateY: 90, // 初期状態: Y軸で90度回転
      opacity: 0, // 初期の透明度
    },
    {
      rotateY: 0, // 最終状態: 正面を向く
      opacity: 1, // 完全に表示
      duration: 1, // アニメーション時間
      stagger: 0.3, // 各要素のアニメーション間隔
      ease: "power2.out", // イージング
      scrollTrigger: {
        trigger: ".sec5", // トリガーとなる要素
        start: "top 80%", // トリガーが画面の80%位置に来たら発火
      },
    }
  );
});