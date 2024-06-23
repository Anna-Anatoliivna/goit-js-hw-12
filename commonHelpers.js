import{a as h,S as f,i as d}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();async function g(e){try{return(await h.get("https://pixabay.com/api/?"+e)).data}catch(r){console.log(r)}}function y(e){return`<li class="gallery-item">
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
      </li>`}function L(e){return e.map(y).join("")}function m(e,r){const o=L(e);r.insertAdjacentHTML("beforeend",o),new f(".gallery a",{captionDelay:250}).refresh()}const n={addLoader(e){e.classList.remove("js-hidden")},delLoader(e){e.classList.add("js-hidden")}},p={add(e){e.classList.remove("js-hidden")},del(e){e.classList.add("js-hidden")}},s={formEl:document.querySelector(".form-request"),btnEl:document.querySelector("button[data-action=submit]"),ulElem:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector("button[data-action=load-more]")},u={emptyHits:"We're sorry, but you've reached the end of search results",userTextEmpty:"Search field must not be empty. Please try again!",invalidRequest:"Sorry, there are no images matching your search query. Please try again!"},l=new URLSearchParams({key:"44439688-e504d8637fbba129a9d0d5115",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15});s.formEl.addEventListener("submit",async e=>{e.preventDefault();const r=e.currentTarget.elements.query.value.trim();if(!r){d.warning({position:"topRight",title:"Attention",message:u.userTextEmpty});return}n.addLoader(s.loader),l.set("q",r),l.set("page",1);let o=l.get("page");try{const a=await g(l);console.log(a),console.log(a.totalHits,l.get("per_page")),console.log(o),console.log(Math.ceil(a.totalHits/l.get("per_page")));const t=Math.ceil(a.totalHits/l.get("per_page"));if(o<t?p.add(s.btnLoad):p.del(s.btnLoad),!a.hits.length)throw new Error("data.hits.length is empty!");s.ulElem.innerHTML="",m(a.hits,s.ulElem)}catch(a){console.log(a),s.ulElem.innerHTML="",d.error({position:"topRight",title:"error",message:u.invalidRequest})}n.delLoader(s.loader),s.formEl.reset()});s.btnLoad.addEventListener("click",async e=>{e.preventDefault(),n.addLoader(s.loader);let r=l.get("page");l.set("page",++r);try{const o=await g(l);console.log(o),console.log(o.totalHits,l.get("per_page")),console.log(r),console.log(Math.ceil(o.totalHits/l.get("per_page")));const a=Math.ceil(o.totalHits/l.get("per_page"));if(r>a)throw new Error("no more pages");if(!o.hits.length)throw new Error("data.hits.length is empty!");m(o.hits,s.ulElem)}catch(o){console.log(o),d.error({position:"topRight",title:"error",message:u.emptyHits})}n.delLoader(s.loader)});
//# sourceMappingURL=commonHelpers.js.map
