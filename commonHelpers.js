import{i as n,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function d(t){return fetch(t).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function m(t){return`<li class="gallery-item">
        <a class="gallery-link" href=${t.largeImageURL}>
          <img class="gallery-image" src=${t.webformatURL} alt=${t.tags} title=${t.tags} />
        </a>
<div class="card-info">
  <ul class="card-info-list">
    <li>
      <h3 class="card-title">Likes</h3>
      <p class="card-text">${t.likes}</p>
    </li>
    <li>
      <h3 class="card-title">Views</h3>
      <p class="card-text">${t.views}</p>
    </li>
    <li>
      <h3 class="card-title">Comments</h3>
      <p class="card-text">${t.comments}</p>
    </li>
    <li>
      <h3 class="card-title">Downloads</h3>
      <p class="card-text">${t.downloads}</p>
    </li>
  </ul>
</div>
      </li>`}function f(t){return t.map(m).join("")}const l={formEl:document.querySelector(".form-request"),btnEl:document.querySelector(".btn"),ulElem:document.querySelector(".gallery"),loader:document.querySelector(".loader")},c=new URLSearchParams({key:"44439688-e504d8637fbba129a9d0d5115",image_type:"photo",orientation:"horizontal",safesearch:!0}),p={captionDelay:250};l.formEl.addEventListener("submit",t=>{t.preventDefault();const s=t.currentTarget.elements.query.value.trim();if(!s){n.warning({position:"topRight",title:"Attention",message:"Search field must not be empty. Please try again!"});return}l.loader.classList.remove("js-hidden"),c.set("q",s);const i="https://pixabay.com/api/?"+c;l.formEl.reset(),d(i).then(o=>{if(l.loader.classList.add("js-hidden"),!o.hits.length)return Promise.reject("error");const e=f(o.hits);l.ulElem.innerHTML=e,new u(".gallery a",p).refresh()}).catch(o=>{n.error({position:"topRight",title:"error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.ulElem.innerHTML=""})});
//# sourceMappingURL=commonHelpers.js.map
