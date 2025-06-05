// =========================================================================
// Splide Type 01：splide設定
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const splideType01 = new Splide('.splide-container.type-01 .splide', {
		type: 'fade',
		autoplay: true,
		interval: 5000,
		speed: 2000,
		rewind: true,
		pauseOnHover: false,
		pauseOnFocus: false,
    });
  
	splideType01.mount();
});
  
// =========================================================================
// Splide Type 02：splide設定
// =========================================================================

document.addEventListener( 'DOMContentLoaded', () => {
	const splideType02 = new Splide('.splide-container.type-02 .splide',{
		type   : 'loop',
		speed:2000,
		rewind: true, // type:slide のときのみtrueが効く
		rewindSpeed: 2000,
		rewindByDrag: true,
		// start  : 0,
		perPage: 2,
		perMove: 2,
		// fixedWidth : '20%', // fixWidthを指定すると、PerPage通りには表示されない 100 / fiexedWidth枚数表示される
		// fixedHeight: '400px',
		gap        : '1rem',
		// focus  : 'center',
		// paginationDirection: 'ttb',
		autoplay:true,
		pauseOnHover:true, //マウスオーバーしたときに自動再生を停止するかどうかを決定します。
		pauseOnFocus:true, //アクセシビリティの観点から、この値はtrueのままにしておくことをおすすめします。
		resetProgress:false, //自動再生が中断されたのち再開する際、それまでの経過時間を維持するか破棄するかを決定します。
		classes: {
			// 矢印関連のクラスを追加
			arrows: 'splide__arrows your-class-arrows',
			arrow : 'splide__arrow your-class-arrow',
			prev  : 'splide__arrow--prev your-class-prev',
			next  : 'splide__arrow--next your-class-next',

			// ページネーション関連のクラスを追加
			pagination: 'splide__pagination your-class-pagination', // container
			page      : 'splide__pagination__page your-class-page', // each button
		},
		breakpoints: {
			768: {
				perPage: 1,
			}
		}
	});
	splideType02.mount();
} );

// =========================================================================
// Splide Type 03：splide設定
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
	const splideType03 = new Splide('.splide-container.type-03 .splide', {
		type: 'slide',
		autoplay: true,
		interval: 5000,
		speed: 2000,
		rewind: true,
		pauseOnHover: false,
		pauseOnFocus: false,
	});
	splideType03.mount();
});


