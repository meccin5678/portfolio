document.addEventListener('DOMContentLoaded', () => {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            const aside = document.querySelector('aside');
            aside.innerHTML = data;

            // `aside`の内容が挿入された後、表示が正しいか確認
            // const navItems = document.querySelectorAll('aside nav ul li');
            // if (navItems.length === 0) {
            //     console.error('nav > ul > li の要素が見つかりません。nav.htmlの構造を確認してください。');
            // }

            // ハンバーガーメニューの機能を実装
            const hmb = document.getElementById('hmb');
            hmb.addEventListener('click', () => {
                hmb.classList.toggle('active');
                aside.classList.toggle('active');
            });
        })
        // .catch(error => console.error('nav.html の読み込み中にエラーが発生しました:', error));
});
