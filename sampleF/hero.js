// -----------------------------
// ✨ ヒーロー画像の関数
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
  const slideA = document.querySelector('.slideA');
  const heroTextA = document.querySelector('.hero-textA');
  const slideB = document.querySelector('.slideB');
  const heroTextB = document.querySelector('.hero-textB');
  const slideC = document.querySelector('.slideC');
  const heroTextC = document.querySelector('.hero-textC');

  const tl = gsap.timeline({
    repeat: -1,        // 無限リピート
    repeatDelay: .5     // 1秒待ってから再スタート（お好みで調整）
  });

  // slideA表示は初回では表示状態

  tl.fromTo(
    heroTextA,
    { opacity: 0, scaleX: 0 },
    { opacity: 1, scaleX: 1, duration: 1.5, ease: "power2.out" }
  )
  .to(
    heroTextA,
    { duration: 1 } // 1秒キープ（durationは第2引数に書く）
  )
  // slideAを非表示、slideBを表示
  .to(
    slideA,
    { scaleX: 0, opacity: 0, duration: 1, ease: "power2.in", transformOrigin: "center center" }
  )
  .fromTo(
    slideB,
    { scaleY: 0, opacity: 0, transformOrigin: "center center" },
    { scaleY: 1, opacity: 1, duration: 1, ease: "power2.out" }
  )
  .fromTo(
    heroTextB,
    { opacity: 0 },
    { opacity: 1, duration: 2.5, ease: "power2.out" }
  )
  // slideBを非表示、slideCを表示
  .to(
    slideB,
    { scaleX: 0, opacity: 0, duration: 1, ease: "power2.in", transformOrigin: "center center" }
  )
  .fromTo(
    slideC,
    { scaleY: 0, opacity: 0, transformOrigin: "center center" },
    { scaleY: 1, opacity: 1, duration: 1, ease: "power2.out" }
  )
  .fromTo(
    heroTextC,
    { opacity: 0},
    { opacity: 1, duration: 2, ease: "power2.out" }
  )
  .to(
    slideC,
    { scaleY: 0, opacity: 0, duration: 1, ease: "power2.in", transformOrigin: "center center" }
  );

});