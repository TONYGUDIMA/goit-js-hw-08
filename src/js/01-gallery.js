// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

function createGallery(items) {
  return items
  .map( item => `
    <a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>`)
  .join('')
}

const gallery = document.querySelector('.gallery')
gallery.innerHTML = createGallery(galleryItems)

const lightbox = new SimpleLightbox('.gallery a', { captionsData : `alt`, captionDelay : 250, }); 
