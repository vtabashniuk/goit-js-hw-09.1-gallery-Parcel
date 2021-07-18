import galleryItems from './app.js';

export default function (currentImageAlt) {
  return galleryItems.findIndex(
    ({ description }) => description === currentImageAlt,
  );
}
