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

const links = document.querySelectorAll('.gallery__link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const instance = basicLightbox.create(`
      <img src="${href}" alt="" class="lightbox__image" />
    `);
    instance.show(() => console.log('hola'));

    const lightboxImage = document.querySelector('.lightbox__image');
    const backgroundLightBox = document.querySelector('.basicLightbox');

    lightboxImage.addEventListener('mouseout', () => {
      backgroundLightBox.style.cursor = `url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Ccircle fill-opacity='.6' fill='%23FFF' cx='16' cy='16' r='16'/%3E%3Cpath fill='%23000' d='M20.385 11l-4.395 4.39-4.375-4.37-.615.615L15.375 16 11 20.37l.615.61 4.375-4.365L20.385 21l.615-.61L16.604 16 21 11.615z'/%3E%3C/g%3E%3C/svg%3E") 16 16, pointer`;
    });

    lightboxImage.addEventListener('mouseover', () => {
      backgroundLightBox.style.cursor = 'default';
    });
  });
});