// -----------------------------
// ✨ ヒーロー画像の関数
// -----------------------------



const slideA = document.querySelector('.slideA');
const heroTextA = document.querySelector('.hero-textA');
const slideB = document.querySelector('.slideB');
const heroTextB = document.querySelector('.hero-textB');
const slideC = document.querySelector('.slideC');
const heroTextC = document.querySelector('.hero-textC');

const tl = gsap.timeline({
  repeat: -1,        // 無限リピート
  repeatDelay: 2     // 1秒待ってから再スタート（お好みで調整）
});

// slideA表示
tl.fromTo(
  slideA,
  { scaleX: 0, opacity: 0, transformOrigin: "center center" },
  { scaleX: 1, opacity: 1, duration: 1, ease: "power2.out" }
)
.fromTo(
  heroTextA,
  { opacity: 0 },
  { opacity: 1, duration: 1, ease: "power2.out" }
)
// slideAを非表示、slideBを表示
.to(
  slideA,
  { scaleX: 0, opacity: 0, duration: 1, ease: "power2.in" }
)
.fromTo(
  slideB,
  { scaleY: 0, opacity: 0, transformOrigin: "center center" },
  { scaleY: 1, opacity: 1, duration: 1, ease: "power2.out" }
)
.fromTo(
  heroTextB,
  { opacity: 0 },
  { opacity: 1, duration: 1, ease: "power2.out" }
)
// slideBを非表示、slideCを表示
.to(
  slideB,
  { scaleX: 0, opacity: 0, duration: 1, ease: "power2.in" }
)
.fromTo(
  slideC,
  { scaleX: 0, opacity: 0, transformOrigin: "center center" },
  { scaleX: 1, opacity: 1, duration: 1, ease: "power2.out" }
)
.fromTo(
  heroTextC,
  { opacity: 0 },
  { opacity: 1, duration: 1, ease: "power2.out" }
);