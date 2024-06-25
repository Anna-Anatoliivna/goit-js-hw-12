import{a as g,S as f,i as d}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=a(t);fetch(t.href,l)}})();async function h(e){try{return(await g.get("https://pixabay.com/api/?"+e)).data}catch(r){console.log(r)}}function y(e){return`<li class="gallery-item">
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
      </li>`}function L(e){return e.map(y).join("")}function p(e,r){const a=L(e);r.insertAdjacentHTML("beforeend",a),new f(".gallery a",{captionDelay:250}).refresh()}const n={addLoader(e){e.classList.remove("js-hidden")},delLoader(e){e.classList.add("js-hidden")}},u={add(e){e.classList.remove("js-hidden")},del(e){e.classList.add("js-hidden")}},o={formEl:document.querySelector(".form-request"),btnEl:document.querySelector("button[data-action=submit]"),ulElem:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector("button[data-action=load-more]")},m={emptyHits:"We're sorry, but you've reached the end of search results",userTextEmpty:"Search field must not be empty. Please try again!",invalidRequest:"Sorry, there are no images matching your search query. Please try again!"},i=new URLSearchParams({key:"44439688-e504d8637fbba129a9d0d5115",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15});o.formEl.addEventListener("submit",async e=>{e.preventDefault();const r=e.currentTarget.elements.query.value.trim();if(!r){d.warning({position:"topRight",title:"Attention",message:m.userTextEmpty});return}n.addLoader(o.loader),i.set("q",r),i.set("page",1);let a=i.get("page");try{const s=await h(i),t=Math.ceil(s.totalHits/i.get("per_page"));if(a<t)u.add(o.btnLoad);else throw u.del(o.btnLoad),new Error("no more pages");if(!s.hits.length)throw new Error("data.hits.length is empty!");o.ulElem.innerHTML="",p(s.hits,o.ulElem)}catch(s){console.log(s),o.ulElem.innerHTML="",d.error({position:"topRight",title:"error",message:m.invalidRequest})}n.delLoader(o.loader),o.formEl.reset()});o.btnLoad.addEventListener("click",async e=>{e.preventDefault(),n.addLoader(o.loader);let r=i.get("page");i.set("page",++r);try{const a=await h(i),s=Math.ceil(a.totalHits/i.get("per_page"));if(r>s)throw new Error("no more pages");if(!a.hits.length)throw new Error("data.hits.length is empty!");p(a.hits,o.ulElem),b()}catch(a){console.log(a),u.del(o.btnLoad),d.error({position:"topRight",title:"error",message:m.emptyHits})}n.delLoader(o.loader)});function b(){const r=o.ulElem.children[0].getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
