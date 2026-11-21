// dx.js - DXイメージ図の拡大モーダル表示 (PCビュー対応)
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('dxModal');
  if (!modal) return;

  const modalBody = modal.querySelector('.dx-modal-body');
  const closeBtn = modal.querySelector('.dx-modal-close');
  const backdrop = modal.querySelector('.dx-modal-backdrop');
  const previews = document.querySelectorAll('.dx-app-preview');

  // PCビュー（961px以上）判定
  const isDesktop = () => window.matchMedia('(min-width: 961px)').matches;

  // モーダルを開く
  function openModal(previewEl) {
    if (!isDesktop()) return;
    const windowEl = previewEl.querySelector('.dx-app-window');
    if (!windowEl) return;

    modalBody.innerHTML = '';
    const clone = windowEl.cloneNode(true);
    modalBody.appendChild(clone);

    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // モーダルを閉じる
  function closeModal() {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!modal.classList.contains('is-active')) {
        modalBody.innerHTML = '';
      }
    }, 250);
  }

  previews.forEach((preview) => {
    // クリックで拡大モーダルを開く
    preview.addEventListener('click', (e) => {
      if (isDesktop()) {
        e.preventDefault();
        openModal(preview);
      }
    });

    // キーボード操作（Enter / Space）対応
    preview.setAttribute('tabindex', '0');
    preview.setAttribute('role', 'button');
    preview.setAttribute('aria-label', 'クリックしてイメージ図を拡大表示');
    preview.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && isDesktop()) {
        e.preventDefault();
        openModal(preview);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // ESCキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
});
