
{
// ナビゲーションデータ
const navLinks = [
	{ text: 'スキル・自己紹介', href: 'index.html' },

	{ text: 'webサイト', href: 'hp.html' },
	{ text: 'バナー', href: 'banner.html' },
	{ text: '価格', href: 'price.html' },
	{ text: 'キャリア・職歴', href: 'career.html' },
	{ text: '現在の仕事状況', href: 'now.html' },
	{ text: 'Javascriptサンプル', href:'manabi/index.html'},
	{ text: 'ブログ', href: 'https://megumi-lab-studio.studio.site'},
	{ text: 'お問合せ', href: 'contact.html' }
  ];
  

// ナビゲーションメニューを生成する関数
const renderNavigation = () => {
	const navElement = document.getElementById('nav'); // <nav>を取得
	const ulElement = document.createElement('ul'); // <ul>を作成
  
	// 配列のリンク情報を元に<li>と<a>を作成
	navLinks.forEach(({ text, href }) => {
	  const liElement = document.createElement('li'); // <li>を作成
	  const aElement = document.createElement('a'); // <a>を作成
  
	  aElement.textContent = text; // リンクのテキストを設定
	  aElement.href = href; // リンク先を設定
  
	  // ブログだけ別ウィンドウで開くように設定
	  if (text === 'ブログ' || text === 'Javascriptサンプル') {
		aElement.target = '_blank'; // 別ウィンドウで開く
		aElement.rel = 'noopener noreferrer'; // セキュリティ強化
	  }
  
	  liElement.appendChild(aElement); // <li>に<a>を挿入
	  ulElement.appendChild(liElement); // <ul>に<li>を挿入
	});
  
	// <nav>に<ul>を追加（中身を一度クリア）
	navElement.innerHTML = ''; // 一度<nav>の中をクリア
	navElement.appendChild(ulElement); // <ul>を<nav>に挿入
  };
  
  // ハンバーガーメニューの動作を設定する関数
  const setupHamburgerMenu = () => {
	const hamburgerButton = document.querySelector('.hamburger'); // HTMLで直接書いたハンバーガーを取得
	const navElement = document.getElementById('nav'); // <nav>を取得
	const ulElement = navElement.querySelector('ul'); // <ul>を取得
	const Batu = document.querySelector('#batu');
	const Hum = document.querySelector('#hum');
  
  // ボタンのクリックでメニューの表示切り替え
  hamburgerButton.addEventListener('click', () => {
    ulElement.classList.toggle('open'); // ナビゲーションを表示・非表示
    hamburgerButton.classList.toggle('open'); // ボタンの見た目を切り替え
	Batu.classList.toggle('open');
	Hum.classList.toggle('open');
  });
  };
  
  // 実行
  renderNavigation(); // ナビゲーションを生成
  setupHamburgerMenu(); // ハンバーガーメニューの動作を設定
}  