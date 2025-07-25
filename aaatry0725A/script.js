document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.slide-img-container', {
    direction: 'horizontal',

    loop: true,
    speed: 6000, // ゆっくり流れる
    autoplay: {
      delay: 0, // 常に動く
      disableOnInteraction: false
    },
    freeMode: true, // 滑らかに
    freeModeMomentum: false, // 一定速度
    breakpoints: {
      800: { slidesPerView: 2 },
      640: { slidesPerView: 2 },
      480: { slidesPerView: 1 }
    }
  });

  const targetH1 = document.querySelector('.gsapAniH1');
  if(targetH1) {
    const text = targetH1.textContent;
    targetH1.innerHTML = '';
    for (const char of text) {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      targetH1.appendChild(span);
    }

    // アニメーション
    const chars = targetH1.querySelectorAll('span');
    const timeline = gsap.timeline();

    // 1. ランダムに散りばめる
    timeline.set(chars, {
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-100, 100),
      rotation: () => gsap.utils.random(-180, 180),
      opacity: 0.5,
      stagger: 0.03,
      duration: 1.2,
      ease: "power2.out"
    });

    // 2. 元の位置に集合
    timeline.to(chars, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 1.2,
      ease: "power2.inOut"
    }, "+=0.5"); // 0.5秒待ってから集合
  }
});

