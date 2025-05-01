// -----------------------------
// ✨ ハンバーガーメニュー
// -----------------------------
const initHamburgerMenu = () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const hum = document.querySelector(".hum");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active"); // メニューの表示・非表示を切り替え
            hum.classList.toggle("open");

            // navMenu内のli要素を取得
            const menuItems = navMenu.querySelectorAll("li");
            if (navMenu.classList.contains("active")) {
                // 各liに遅延を設定
                menuItems.forEach((item, index) => {
                    item.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
                });
            } else {
                // 非表示時にアニメーションをリセット
                menuItems.forEach((item) => {
                    item.style.animation = "none";
                });
            }
        });
    }
};


// -----------------------------
// ✨ ふわっと表示
// -----------------------------
const initFadeInEffect = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 表示を遅延させる
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 300); // 各要素に300msずつディレイを追加
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
};

// -----------------------------
// ✨ モーダル
// -----------------------------
const initModalByTime = () => {
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("closeModal");

    const openModal = () => {
        modal.classList.add("visible"); // モーダルを表示
    };

    const closeModal = () => {
        modal.classList.remove("visible"); // モーダルを非表示
    };

    // 一定時間（5秒後）にモーダルを表示
    setTimeout(openModal, 5000);

    // 閉じるボタンのクリックイベント
    closeButton.addEventListener("click", closeModal);

    // モーダルの背景をクリックして閉じる
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
};

// -----------------------------
// ✨ Swiper
// -----------------------------
const initSwiper = () => {
    const swiper = new Swiper(".swiper", {
        loop: true, // 無限ループON（内部でクローン作成）
        speed: 4000, // スライドのスピード（大きくするとゆっくり動く）
        autoplay: {
            delay: 0, 
            disableOnInteraction: false, // ユーザーが操作しても止まらない
        },
        slidesPerView: "auto", // ロゴの横幅に応じて自動調整
        spaceBetween: 40, // 
        freeMode: true,
        freeModeMomentum: false,
        allowTouchMove: false,
    });
};
// -----------------------------
// ✨ footerのfixedボタン
// -----------------------------
const initFooterFixedButton = () => {
    const sec5 = document.querySelector(".sec5");
    const fixedButton = document.querySelector(".fotter-fixed");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // フッターが見えたらボタンを表示
                fixedButton.classList.add("visible");
                observer.unobserve(sec5); // 一度表示したら監視を解除
            }
        });
    });

    observer.observe(sec5);
};



// -----------------------------
// ✨ DOM読み込み後の発火
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
    initHamburgerMenu(); 
    initFadeInEffect();
    initSwiper();
    initModalByTime();
    initFooterFixedButton();
});
