// nav.js
document.addEventListener("DOMContentLoaded", () => {
    const hum = document.querySelector(".hum");
    const navMenu = document.querySelector(".nav-menu");
  
    hum.addEventListener("click", () => {
      hum.classList.toggle("active");
      navMenu.classList.toggle("open");
  
      // メニュー項目の遅延アニメーション
      const menuItems = document.querySelectorAll(".nav-menu ul li");
      menuItems.forEach((item, index) => {
        if (navMenu.classList.contains("open")) {
          item.style.transitionDelay = `${index * 0.1}s`;
          item.style.opacity = "1";
          item.style.visibility = "visible";
          item.style.transform = "translateY(0)";
        } else {
          item.style.transitionDelay = "0s";
          item.style.opacity = "0";
          item.style.visibility = "hidden";
          item.style.transform = "translateY(-50vh)";
        }
      });
    });
  });