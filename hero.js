const heroArtElements = document.querySelectorAll(".hero-art");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const wideHeroStates = new WeakMap();
const trianglePoints = [
  { x: 200, y: 38 },
  { x: 355, y: 292 },
  { x: 45, y: 292 },
];
const segmentDuration = 6000;

const syncWideHeroHeight = (heroArt) => {
  const services = document.querySelector(".home-page .services");

  if (!services) {
    return;
  }

  const artTop = heroArt.getBoundingClientRect().top;
  const servicesBottom = services.getBoundingClientRect().bottom;
  heroArt.style.height = `${Math.ceil(Math.max(window.innerHeight, servicesBottom - artTop))}px`;
};

const getWideHeroState = (heroArt) => {
  const canvas = heroArt.querySelector(".hero-canvas");

  if (!canvas) {
    return null;
  }

  let state = wideHeroStates.get(heroArt);

  if (!state) {
    const context = canvas.getContext("2d");

    if (!context) {
      return null;
    }

    state = {
      canvas,
      context,
    };

    wideHeroStates.set(heroArt, state);
  }

  return state;
};

const drawWideHero = (heroArt, timestamp) => {
  const state = getWideHeroState(heroArt);

  if (!state) {
    return;
  }

  const { canvas, context } = state;
  const bounds = heroArt.getBoundingClientRect();
  const width = bounds.width;
  const height = bounds.height;

  if (width === 0 || height === 0) {
    return;
  }

  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
  const pixelWidth = Math.round(width * pixelRatio);
  const pixelHeight = Math.round(height * pixelRatio);

  if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
  }

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);

  const colors = ["230, 0, 18", "0, 104, 183"];
  const centerX = width * 0.72;
  const centerY = Math.min(window.innerHeight, height) * 0.53;
  const spread = Math.hypot(
    Math.max(centerX, width - centerX),
    Math.max(centerY, height - centerY),
  ) + 36;

  for (let index = 0; index < 6; index += 1) {
    const progress = (timestamp / 10800 + index / 6) % 1;
    const radius = 18 + progress * spread;
    const fade = 1 - progress;
    const color = colors[index % colors.length];
    const fill = context.createRadialGradient(centerX, centerY, radius * 0.72, centerX, centerY, radius);
    fill.addColorStop(0, `rgba(${color}, 0)`);
    fill.addColorStop(0.82, `rgba(${color}, ${fade * 0.045})`);
    fill.addColorStop(1, `rgba(${color}, ${fade * 0.12})`);

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.fillStyle = fill;
    context.fill();
    context.shadowBlur = 12;
    context.shadowColor = `rgba(${color}, ${fade * 0.38})`;
    context.strokeStyle = `rgba(${color}, ${fade * 0.42})`;
    context.lineWidth = 1.1;
    context.stroke();
    context.shadowBlur = 0;
  }

  const textSafeFade = context.createLinearGradient(0, 0, width * 0.74, 0);
  textSafeFade.addColorStop(0, "rgba(255, 255, 255, 0.34)");
  textSafeFade.addColorStop(0.55, "rgba(255, 255, 255, 0.55)");
  textSafeFade.addColorStop(1, "rgba(255, 255, 255, 1)");
  context.globalCompositeOperation = "destination-in";
  context.fillStyle = textSafeFade;
  context.fillRect(0, 0, width, height);

  const fadeHeight = Math.min(240, height * 0.24);
  const bottomFade = context.createLinearGradient(0, height - fadeHeight, 0, height);
  bottomFade.addColorStop(0, "rgba(255, 255, 255, 1)");
  bottomFade.addColorStop(1, "rgba(255, 255, 255, 0)");
  context.fillStyle = bottomFade;
  context.fillRect(0, 0, width, height);
  context.globalCompositeOperation = "source-over";
};

if (heroArtElements.length > 0) {
  const visibleHeroArts = new Set();
  let animationFrame = 0;
  let lastFrameTime = 0;
  const minimumFrameInterval = 1000 / 30;

  heroArtElements.forEach((heroArt) => {
    if (heroArt.classList.contains("hero-art-wide")) {
      syncWideHeroHeight(heroArt);
      drawWideHero(heroArt, 1800);
    }
  });

  const resizeWideHeroes = () => {
    heroArtElements.forEach((heroArt) => {
      if (heroArt.classList.contains("hero-art-wide")) {
        syncWideHeroHeight(heroArt);
        drawWideHero(heroArt, 1800);
      }
    });
  };

  window.addEventListener("resize", resizeWideHeroes);

  const services = document.querySelector(".home-page .services");
  if (services && "ResizeObserver" in window) {
    new ResizeObserver(resizeWideHeroes).observe(services);
  }

  const animateLight = (timestamp) => {
    if (timestamp - lastFrameTime < minimumFrameInterval) {
      animationFrame = window.requestAnimationFrame(animateLight);
      return;
    }

    lastFrameTime = timestamp;

    visibleHeroArts.forEach((heroArt) => {
      if (heroArt.classList.contains("hero-art-wide")) {
        drawWideHero(heroArt, timestamp);
        return;
      }

      const segmentProgress = (timestamp % (segmentDuration * trianglePoints.length)) / segmentDuration;
      const segmentIndex = Math.floor(segmentProgress);
      const nextSegmentIndex = (segmentIndex + 1) % trianglePoints.length;
      const progress = segmentProgress - segmentIndex;
      const easedProgress = progress * progress * (3 - 2 * progress);
      const start = trianglePoints[segmentIndex];
      const end = trianglePoints[nextSegmentIndex];
      const x = start.x + (end.x - start.x) * easedProgress;
      const y = start.y + (end.y - start.y) * easedProgress;
      const directionX = x - 200;
      const directionY = y - 190;
      const directionAngle = Math.atan2(directionY, directionX);
      const lightPoint = heroArt.querySelector(".light-point");
      const lightHalo = heroArt.querySelector(".light-halo");
      const rays = heroArt.querySelectorAll(".moving-ray");

      if (lightPoint && lightHalo && rays.length === 3) {
        lightPoint.setAttribute("cx", String(x));
        lightPoint.setAttribute("cy", String(y));
        lightHalo.setAttribute("cx", String(x));
        lightHalo.setAttribute("cy", String(y));
        lightHalo.style.opacity = String(0.16 + (Math.sin(timestamp / 900) + 1) * 0.08);

        rays.forEach((ray, index) => {
          const rayAngle = directionAngle + (index - 1) * 0.2;
          const rayLength = index === 0 ? 72 : 54;
          const rayX = x + Math.cos(rayAngle) * rayLength;
          const rayY = y + Math.sin(rayAngle) * rayLength;

          ray.setAttribute("x1", String(x));
          ray.setAttribute("y1", String(y));
          ray.setAttribute("x2", String(rayX));
          ray.setAttribute("y2", String(rayY));
        });
      }
    });

    animationFrame = window.requestAnimationFrame(animateLight);
  };

  if (motionPreference.matches) {
    resizeWideHeroes();
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleHeroArts.add(entry.target);
        } else {
          visibleHeroArts.delete(entry.target);
        }
      });

      if (visibleHeroArts.size > 0 && animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(animateLight);
      } else if (visibleHeroArts.size === 0 && animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    });

    heroArtElements.forEach((heroArt) => observer.observe(heroArt));
  }
}
