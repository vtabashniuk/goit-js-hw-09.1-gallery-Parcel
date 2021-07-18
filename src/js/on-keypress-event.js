import { imageAtModal } from './variables';
import getCurrentImageIndex from './get-current-image-index';
import renderPreviousImage from './render-previous-image';
import renderNextImage from './render-next-image';
import closeModal from './close-modal';

export default function (event) {
  const currenImagetIndex = getCurrentImageIndex(imageAtModal.alt);

  switch (event.code) {
    case 'ArrowLeft':
      renderPreviousImage(currenImagetIndex);
      break;
    case 'ArrowRight':
      renderNextImage(currenImagetIndex);
      break;
    case 'Escape':
      closeModal();
      break;
    default:
  }
}
