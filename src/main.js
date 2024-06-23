import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import fetchData from './js/pixabay-api.js';
import { renderMarkup } from './js/render-functions.js';
import { loader, loadMore } from './js/helpers.js';

const refs = {
  formEl: document.querySelector('.form-request'),
  btnEl: document.querySelector('button[data-action=submit]'),
  ulElem: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  btnLoad: document.querySelector('button[data-action=load-more]'),
};
const errors = {
  emptyHits: "We're sorry, but you've reached the end of search results",
  userTextEmpty: 'Search field must not be empty. Please try again!',
  invalidRequest:
    'Sorry, there are no images matching your search query. Please try again!',
};

const params = new URLSearchParams({
  key: '44439688-e504d8637fbba129a9d0d5115',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page: 15,
});

refs.formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const userText = e.currentTarget.elements.query.value.trim();

  if (!userText) {
    iziToast.warning({
      position: `topRight`,
      title: `Attention`,
      message: errors.userTextEmpty,
    });
    return;
  }
  loader.addLoader(refs.loader);
  params.set('q', userText);
  params.set('page', 1);
  let currentPage = params.get('page');
  try {
    const data = await fetchData(params);
    console.log(data);
    console.log(data.totalHits, params.get('per_page'));
    console.log(currentPage);
    console.log(Math.ceil(data.totalHits / params.get('per_page')));
    const limit = Math.ceil(data.totalHits / params.get('per_page'));
    if (currentPage < limit) {
      // throw new Error('no more pages');
      loadMore.add(refs.btnLoad);
    } else {
      loadMore.del(refs.btnLoad);
    }
    if (!data.hits.length) throw new Error('data.hits.length is empty!');
    refs.ulElem.innerHTML = '';
    renderMarkup(data.hits, refs.ulElem);
  } catch (error) {
    console.log(error);
    refs.ulElem.innerHTML = '';
    iziToast.error({
      position: `topRight`,
      title: `error`,
      message: errors.invalidRequest,
    });
  }
  loader.delLoader(refs.loader);
  refs.formEl.reset();
});
refs.btnLoad.addEventListener('click', async e => {
  e.preventDefault();
  loader.addLoader(refs.loader);
  let currentPage = params.get('page');
  params.set('page', ++currentPage);
  try {
    const data = await fetchData(params);
    console.log(data);
    console.log(data.totalHits, params.get('per_page'));
    console.log(currentPage);
    console.log(Math.ceil(data.totalHits / params.get('per_page')));
    const limit = Math.ceil(data.totalHits / params.get('per_page'));
    if (currentPage > limit) {
      throw new Error('no more pages');
    }
    if (!data.hits.length) throw new Error('data.hits.length is empty!');
    renderMarkup(data.hits, refs.ulElem);
  } catch (error) {
    console.log(error);
    iziToast.error({
      position: `topRight`,
      title: `error`,
      message: errors.emptyHits,
    });
  }
  loader.delLoader(refs.loader);
});
