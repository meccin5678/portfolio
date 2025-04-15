document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.coachA', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 0,
        speed: 6000, // アニメーション速度を長くして滑らかに
        autoplay: {
            delay: 0, // ←止めない
            disableOnInteraction: false,
        },
        allowTouchMove: false, // ←ユーザー操作による中断を防ぐ
    });

    new Swiper('.coachB', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 0,
        speed: 6000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true, // ←逆再生を有効に
        },
        allowTouchMove: false,
    });
});