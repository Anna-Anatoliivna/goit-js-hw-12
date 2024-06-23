import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import getImages from './js/pixabay-api.js';
import { imagesTamplate } from './js/render-functions.js';

const refs = {
  formEl: document.querySelector('.form-request'),
  btnEl: document.querySelector('.btn'),
  ulElem: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

const params = new URLSearchParams({
  key: '44439688-e504d8637fbba129a9d0d5115',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});
const options = {
  captionDelay: 250,
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const userText = e.currentTarget.elements.query.value.trim();

  if (!userText) {
    iziToast.warning({
      position: `topRight`,
      title: `Attention`,
      message: 'Search field must not be empty. Please try again!',
    });
    return;
  }
  refs.loader.classList.remove('js-hidden');
  params.set('q', userText);
  const userUrl = 'https://pixabay.com/api/?' + params;
  refs.formEl.reset();
  getImages(userUrl)
    .then(images => {
      refs.loader.classList.add('js-hidden');
      // console.log(images);
      if (!images.hits.length) return Promise.reject('error');

      const markup = imagesTamplate(images.hits);
      refs.ulElem.innerHTML = markup;
      const lightbox = new SimpleLightbox('.gallery a', options);
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        position: `topRight`,
        title: `error`,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      refs.ulElem.innerHTML = '';
    });
});
