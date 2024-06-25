import{a as f,S as g,i as d}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}})();async function p(e){try{return(await f.get("https://pixabay.com/api/?"+e)).data}catch(r){console.log(r)}}function y(e){return`<li class="gallery-item">
        <a class="gallery-link" href=${e.largeImageURL}>
          <img class="gallery-image" src=${e.webformatURL} alt=${e.tags} title=${e.tags} />
        </a>
<div class="card-info">
  <ul class="card-info-list">
    <li>
      <h3 class="card-title">Likes</h3>
      <p class="card-text">${e.likes}</p>
    </li>
    <li>
      <h3 class="card-title">Views</h3>
      <p class="card-text">${e.views}</p>
    </li>
    <li>
      <h3 class="card-title">Comments</h3>
      <p class="card-text">${e.comments}</p>
    </li>
    <li>
      <h3 class="card-title">Downloads</h3>
      <p class="card-text">${e.downloads}</p>
    </li>
  </ul>
</div>
      </li>`}function L(e){return e.map(y).join("")}function h(e,r){const s=L(e);r.insertAdjacentHTML("beforeend",s),new g(".gallery a",{captionDelay:250}).refresh()}const n={addLoader(e){e.classList.remove("js-hidden")},delLoader(e){e.classList.add("js-hidden")}},u={add(e){e.classList.remove("js-hidden")},del(e){e.classList.add("js-hidden")}},a={formEl:document.querySelector(".form-request"),btnEl:document.querySelector("button[data-action=submit]"),ulElem:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector("button[data-action=load-more]")},m={emptyHits:"We're sorry, but you've reached the end of search results",userTextEmpty:"Search field must not be empty. Please try again!",invalidRequest:"Sorry, there are no images matching your search query. Please try again!"},i=new URLSearchParams({key:"44439688-e504d8637fbba129a9d0d5115",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15});a.formEl.addEventListener("submit",async e=>{e.preventDefault();const r=e.currentTarget.elements.query.value.trim();if(!r){d.warning({position:"topRight",title:"Attention",message:m.userTextEmpty});return}n.addLoader(a.loader),i.set("q",r),i.set("page",1);let s=i.get("page");try{const o=await p(i),t=Math.ceil(o.totalHits/i.get("per_page"));if(s<t?u.add(a.btnLoad):u.del(a.btnLoad),!o.hits.length)throw new Error("data.hits.length is empty!");a.ulElem.innerHTML="",h(o.hits,a.ulElem)}catch(o){console.log(o),a.ulElem.innerHTML="",d.error({position:"topRight",title:"error",message:m.invalidRequest})}n.delLoader(a.loader),a.formEl.reset()});a.btnLoad.addEventListener("click",async e=>{e.preventDefault(),n.addLoader(a.loader);let r=i.get("page");i.set("page",++r);try{const s=await p(i),o=Math.ceil(s.totalHits/i.get("per_page"));if(r>o)throw new Error("no more pages");if(!s.hits.length)throw new Error("data.hits.length is empty!");h(s.hits,a.ulElem)}catch(s){console.log(s),u.del(a.btnLoad),d.error({position:"topRight",title:"error",message:m.emptyHits})}n.delLoader(a.loader)});
//# sourceMappingURL=commonHelpers.js.map
