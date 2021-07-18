import onKeyPressEvent from './on-keypress-event';
import { openModalRef, imageAtModal } from './variables';

export default function () {
  openModalRef.classList.remove('is-open');
  window.removeEventListener('keydown', onKeyPressEvent);
  imageAtModal.src = '';
  imageAtModal.alt = '';
}
