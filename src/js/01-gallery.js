import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

galleryItems.forEach(({ original, preview, description }) => {
  galleryContainer.innerHTML += `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" width="800" />
</a>`;
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
