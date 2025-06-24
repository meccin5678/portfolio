// // ページ内リンクのスムーズスクロール　対応1
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', e => {
//       console.log('clicked:', anchor.getAttribute('href')); // ←追加
//       const targetId = anchor.getAttribute('href');
//       if (targetId.length > 1 && document.querySelector(targetId)) {
//         e.preventDefault();
//         document.querySelector(targetId).scrollIntoView({
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
// });

// // ページ内リンクのスムーズスクロール　対応2
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', e => {
//       const targetId = anchor.getAttribute('href');
//       console.log('targetId:', targetId);
//       const target = document.querySelector(targetId);
//       console.log('target:', target);
//       if (targetId.length > 1 && target) {
//         e.preventDefault();
//         const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
//         // window.scrollToは、ページ全体を指定した位置までスクロールするメソッドです。
//         // top: y でスクロール先のY座標（ページ上端からのピクセル数）を指定します。
//         // behavior: 'smooth' でスクロールをなめらかにアニメーションします。
//         window.scrollTo({ top: y, behavior: 'smooth' });
//       }
//     });
//   });
// });


setTimeout(() => {
  const target = document.querySelector(location.hash);
  if (target) {
    const offset = 80;
    const y = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}, 500);