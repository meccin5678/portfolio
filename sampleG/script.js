// -----------------------------
// ✨ GSAP
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  // GSAPで回転アニメーションを適用
  gsap.registerPlugin(ScrollTrigger);

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