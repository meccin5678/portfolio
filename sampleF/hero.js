document.addEventListener("DOMContentLoaded", () => {
  const slideA = document.querySelector('.slideA');
  const heroTextA = document.querySelector('.hero-textA');
  const slideB = document.querySelector('.slideB');
  const heroTextB = document.querySelector('.hero-textB');
  const slideC = document.querySelector('.slideC');
  const heroTextC = document.querySelector('.hero-textC');

  const tl = gsap.timeline({ repeat: -1 });

  tl
    // --- Slide A ---
    .fromTo(slideA,
      { opacity: .7 }, 
      { opacity: 1, duration: 1.5, ease: "power2.out" })
    .fromTo(heroTextA,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
      ">-0.5")
    .to(heroTextA, { duration: 1.5 }) // 表示キープ
    .to(slideA, { opacity: 0, scaleX: 0, transformOrigin: "left", duration: 1.5, ease: "power2.in" })

    // --- Slide B ---
    .fromTo(slideB, { opacity: 0,  }, 
      { opacity: 1, duration: 1.5, ease: "power2.out" }, "-=1")
    .fromTo(heroTextB,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
      ">-0.5"
    )
    .to(heroTextB, { duration: 1.5 })
    .to(slideB, { opacity: 0, scaleX: 0, transformOrigin: "left", duration: 1.5, ease: "power2.in" })

    // --- Slide C ---
    .fromTo(slideC, { opacity: 0,  }, 
      { opacity: 1, duration: 1.5, ease: "power2.out" }, "-=1")
    .fromTo(heroTextC,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
      ">-0.5"
    )
    .to(heroTextC, { duration: 1.5 })
    .to(slideC, { opacity: 0, scaleX: 0, transformOrigin: "left", duration: 1.5, ease: "power2.in" })
    .set(slideA, { opacity: .7, scaleX: 1 }, "-=1.5")
    .set(heroTextA, { opacity: 0, scale: 1.1 }, "-=1.5")
});