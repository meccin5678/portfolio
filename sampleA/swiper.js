document.addEventListener("DOMContentLoaded", () => {
    const swiperContainer = document.querySelector('.swiper');
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    if (swiperContainer && swiperWrapper) {
        const imagePath = "img-item/"; // 画像のパスの共通部分
        const imageExtensions = [".jpg", ".png"]; // 画像の拡張子

        // 商品データのオブジェクト配列
        const products = [
            { fileName: "item001", name: "webサイト制作" },
            { fileName: "item002", name: "ブランディング" },
            { fileName: "item003", name: "アプリ開発" },
            { fileName: "item004", name: "映像制作" },
            { fileName: "item005", name: "ドローン撮影" },
            { fileName: "item006", name: "音源制作" },
            { fileName: "item007", name: "ディスプレイ広告" },
            { fileName: "item008", name: "SNSマーケティング" },
            { fileName: "item009", name: "インフルエンサーマネジメント" },
            { fileName: "item010", name: "パッケージデザイン" },
            { fileName: "item011", name: "ノベルティグッズ制作" },
            { fileName: "item012", name: "商品プロデュース" }
        ];

        // 画像を動的に追加
        products.forEach(product => {
            const swiperSlide = document.createElement("div");
            swiperSlide.classList.add("swiper-slide");
            const img = document.createElement("img");
            const title = document.createElement("p");

            // まず.jpgを試し、存在しない場合は.pngを試す
            img.src = `${imagePath}${product.fileName}${imageExtensions[0]}`;
            img.onerror = () => {
                img.src = `${imagePath}${product.fileName}${imageExtensions[1]}`;
            };

            img.alt = product.name;
            title.textContent = product.name; // タイトルを設定
            title.classList.add("swiper-title"); // タイトルにクラスを追加

            swiperSlide.appendChild(img);
            swiperSlide.appendChild(title);
            swiperWrapper.appendChild(swiperSlide);     
        });

        // Swiperの初期化
        const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 4000,
            slidesPerView: 1, // デフォルトのスライド表示数
            spaceBetween: 0,
            allowTouchMove: true,
            loopedSlides: 2,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            breakpoints: {
                1480: {
                    slidesPerView: 3, // 画面幅が1480ピクセル以上の場合
                },
                1280: {
                    slidesPerView: 3, // 画面幅が1280ピクセル以上の場合
                },
                1024: {
                    slidesPerView: 2, // 画面幅が1024ピクセル以上の場合
                },
                768: {
                    slidesPerView: 2, // 画面幅が768ピクセル以上の場合
                },
                480: {
                    slidesPerView: 1, // 画面幅が480ピクセル以上の場合
                }
            },
        });

        // マウスオーバー時に停止、マウスアウト時に再開
        swiperContainer.addEventListener('mouseover', () => {
            swiper.autoplay.stop();
        });
        swiperContainer.addEventListener('mouseout', () => {
            swiper.autoplay.start();
        });
    }
});