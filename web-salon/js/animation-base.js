document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // スプリットテキスト設定
  const splitTextToSpans = (selector) => {
    document.querySelectorAll(selector).forEach(el => {
      const text = el.textContent;
      el.innerHTML = '';
      text.split('').forEach(char => {
        const span = document.createElement('span');
        // スペースの場合は &nbsp; を使う
        span.innerHTML = (char === ' ') ? '&nbsp;' : char;
        el.appendChild(span);
      });
    });
  };

  splitTextToSpans('.loading .main');
  splitTextToSpans('.loading .tagline');

  const loading = document.querySelector(".loading");
  const loadingBg = document.querySelector(".loading .bg");
  const loadingTl = gsap.timeline();

  loadingTl
  .fromTo('.loading .main span',
    { autoAlpha: 0 },
    { autoAlpha: 1, stagger: 0.1, duration: 0.1, ease: "power3.inOut" }
  )
  .fromTo('.loading .tagline span',
    { autoAlpha: 0 },
    { autoAlpha: 1, stagger: 0.05, duration: 0.05, ease: "power3.inOut" },
    "-=0.5"
  )
    .to(loadingBg, {
      yPercent: -100,
      ease: "power3.inOut",
      duration: 1
    })
    .to(loading, {
      onComplete: () => {
        loading.style.display = "none";
      },
    });

  const HeroTl = gsap.timeline({ paused: true });
  HeroTl
    .to("main", {
      scale: 1,
      filter: "blur(0px)",
      duration: .8,
      ease: "power2.out"
    })
    .to("main .hero h2", {
      autoAlpha: 1,
      duration: .8,
      ease: "power2.out"
    }, '<')
    .to("main .hero h3", {
      autoAlpha: 1,
      duration: .5,
      ease: "power2.out"
    },  "-=.2")
    .to("main .fixed-btn", {
      autoAlpha: 1,
      duration: .5,
      ease: "power2.out"
    },  "-=.2");

  loadingTl.eventCallback('onComplete', () => {
    HeroTl.play();
  });

  const featureBoxes = gsap.utils.toArray('.sec-feature .box-container');
  featureBoxes.forEach((target) => {
    const P2 = target.querySelector('.p2');
    const left = target.querySelector('.box .left');
    const right = target.querySelector('.box .right');
    const sentence = target.querySelector('.sentence');

    const featureBoxAnimation = gsap.timeline({
      defaults: {
        autoAlpha: 0,
        filter: "blur(15px)",
        duration: 0.5,
      },
      scrollTrigger: {
        trigger: target,
        start: 'top center',
        end: 'bottom end',
      },
    });

    featureBoxAnimation
      .from(P2, { y: 50 })
      .from(left, { x: -100 })
      .from(right, { x: 100 }, "<")
      .from(sentence, { y: 50 }, "+=0.1");
  });
});









