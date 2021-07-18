import closeModal from './close-modal';

export default function (event) {
  if (
    event.target.classList.contains('lightbox__overlay') ||
    event.target.classList.contains('lightbox__button')
  ) {
    closeModal();
  }
}
