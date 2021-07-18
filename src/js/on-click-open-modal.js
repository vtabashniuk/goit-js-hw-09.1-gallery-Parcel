import onClickCloseModal from './on-click-close-modal';
import onKeyPressEvent from './on-keypress-event';
import { openModalRef, imageAtModal } from './variables';

export default function (event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  openModalRef.classList.add('is-open');
  imageAtModal.src = event.target.dataset.source;
  imageAtModal.alt = event.target.alt;
  openModalRef.addEventListener('click', onClickCloseModal);
  window.addEventListener('keydown', onKeyPressEvent);
}
