export const loader = {
  addLoader(element) {
    element.classList.remove('js-hidden');
  },
  delLoader(element) {
    element.classList.add('js-hidden');
  },
};

export const loadMore = {
  add(element) {
    element.classList.remove('js-hidden');
  },
  del(element) {
    element.classList.add('js-hidden');
  },
};