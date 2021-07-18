import galleryItems from './app.js';
import { imageAtModal } from './variables';

export default function (indexOfImage) {
  if (indexOfImage === galleryItems.length - 1) {
    indexOfImage = -1;
  }
  const { original, description } = galleryItems.find(
    item => galleryItems.indexOf(item) === indexOfImage + 1,
  );

  imageAtModal.src = original;
  imageAtModal.alt = description;
}
