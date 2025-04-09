document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const imagePath = "img-item/"; // 画像のパスの共通部分
    const imageExtensions = [".jpg", ".png"]; // 画像の拡張子

    // 商品データのオブジェクト配列
    const products = [
        {   fileName: "item001", 
            name: "webサイト制作", 
            comment: "企業や小規模に対応したwebサイトの制作" },
        {   fileName: "item002", 
            name: "ブランディング",
            comment: "企業や商品のブランドイメージを構築" },
        {   fileName: "item003", 
            name: "アプリ開発", 
            comment: "スマホやタブレットのアプリケーションを開発" },
        {   fileName: "item004", 
            name: "映像制作",
            comment: "映像コンテンツの制作" },
        {   fileName: "item005",
            name: "ドローン撮影",
            comment: "空撮も承っております" },
        {   fileName: "item006",
            name: "音源制作",
            comment: "メロディーや効果音などの制作" },
        {   fileName: "item007",
            name: "ディスプレイ広告",
            comment: "ディスプレイ広告の制作・運用" },
        {   fileName: "item008",
            name: "SNSマーケティング",
            comment: "SNSを活用した戦略的マーケティング" },
        {   fileName: "item009",
            name: "インフルエンサーマネジメント",
            comment: "インフルエンサーとのタイアップで短期間で結果を出しています" },

        {   fileName: "item010",
            name: "パッケージデザイン",
            comment: "商品や包装のデザインの制作" },
            
        {   fileName: "item011",
            name: "ノベルティグッズ企画",
            comment: "ノベルティグッズの企画・制作" },
        {   fileName: "item012",
            name: "商品プロデュース",
            comment: "商品の企画・開発・販売" },
    ];
                
    // 表示する商品の数を設定
    const displayCount = productList.dataset.imageCount ? parseInt(productList.dataset.imageCount) : products.length;

    // 指定された数の商品を表示
    products.slice(0, displayCount).forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item"); // クラスを追加
        const img = document.createElement("img");
        const nameP = document.createElement("p");
        nameP.classList.add("name-p");
        const commentP = document.createElement("p"); // コメント用のp要素を追加

        img.src = `${imagePath}${product.fileName}${imageExtensions[1]}`; // まず.pngを試す

        img.onerror = () => {
            img.src = `${imagePath}${product.fileName}${imageExtensions[0]}`; // .pngが存在しない場合は.jpgを試す
        };

        nameP.textContent = product.name; // 商品名を設定
        commentP.textContent = product.comment; // コメントを設定

        productDiv.appendChild(img);
        productDiv.appendChild(nameP);
        productDiv.appendChild(commentP); // コメントを追加
        productList.appendChild(productDiv);
    });
});