import galleryItems from './app.js';
import { imageAtModal } from './variables';

export default function (indexOfImage) {
  if (indexOfImage === 0) {
    indexOfImage = galleryItems.length;
  }
  const { original, description } = galleryItems.find(
    item => galleryItems.indexOf(item) === indexOfImage - 1,
  );

  imageAtModal.src = original;
  imageAtModal.alt = description;
}
