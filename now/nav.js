// ページ内リンクのスムーススクロール
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


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      console.log('targetId:', targetId);
      const target = document.querySelector(targetId);
      console.log('target:', target);
      if (targetId.length > 1 && target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
});