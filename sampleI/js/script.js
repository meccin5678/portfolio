// =========================================================================
// モーダル - 練習
// =========================================================================

// モーダルを開く
document.querySelector('.trial .try-try-btn').addEventListener('click', function () {
  document.querySelector('.trial .modal-try-content').classList.add('is-active');
  document.querySelector('.trial .overlay').classList.add('is-active');
  // document.body.style.overflow = 'hidden';
});

// モーダルを閉じる
document.querySelectorAll('.trial .modal-try-content .tryClose').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelector('.trial .modal-try-content').classList.remove('is-active');
    document.querySelector('.trial .overlay').classList.remove('is-active');
    // document.body.style.overflow = ''; 
  });
});