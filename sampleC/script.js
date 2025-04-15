document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.coachA', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 6000, // アニメーション速度を長くして滑らかに
        autoplay: {
            delay: 0, // 自動再生を止めない
            disableOnInteraction: false, // ユーザー操作後も再生を継続
        },
        allowTouchMove: false, // ユーザー操作を無効化
        loopAdditionalSlides: 2, // 追加スライドを生成してループを確実に
        breakpoints: {
            768: { slidesPerView: 4 }, // 横幅768px以上で4枚表示

        },
    });

    new Swiper('.coachB', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 6000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // 逆再生を有効に
        },
        allowTouchMove: false,
        loopAdditionalSlides: 2, // 追加スライドを生成してループを確実に
        breakpoints: {
            768: { slidesPerView: 4 }, // 横幅768px以上で4枚表示

        },
    });
});