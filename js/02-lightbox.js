import { galleryItems } from './gallery-items.js';

const listGallery = document.querySelector('.gallery');

galleryItems.forEach((element) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.href = element.original;
  link.classList.add('gallery__link');

  const image = document.createElement('img');
  image.src = element.preview;
  image.alt = element.description;
  image.classList.add('gallery__image');

  link.appendChild(image);
  listItem.appendChild(link);
  listGallery.appendChild(listItem);
});

const galleryCaption = new SimpleLightbox('.gallery__link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
