export function imageTamplate(image) {
  return `<li class="gallery-item">
        <a class="gallery-link" href=${image.largeImageURL}>
          <img class="gallery-image" src=${image.webformatURL} alt=${image.tags} title=${image.tags} />
        </a>
<div class="card-info">
  <ul class="card-info-list">
    <li>
      <h3 class="card-title">Likes</h3>
      <p class="card-text">${image.likes}</p>
    </li>
    <li>
      <h3 class="card-title">Views</h3>
      <p class="card-text">${image.views}</p>
    </li>
    <li>
      <h3 class="card-title">Comments</h3>
      <p class="card-text">${image.comments}</p>
    </li>
    <li>
      <h3 class="card-title">Downloads</h3>
      <p class="card-text">${image.downloads}</p>
    </li>
  </ul>
</div>
      </li>`;
}

export function imagesTamplate(arr) {
  return arr.map(imageTamplate).join('');
}
