import{a as g,S as f,i as n}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();async function p(e){try{return(await g.get("https://pixabay.com/api/?"+e)).data}catch(r){console.log(r)}}function y(e){return`<li class="gallery-item">
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
      </li>`}function L(e){return e.map(y).join("")}const E=new f(".gallery a",{captionDelay:250});function h(e,r){const a=L(e);r.insertAdjacentHTML("beforeend",a),E.refresh()}const d={addLoader(e){e.classList.remove("js-hidden")},delLoader(e){e.classList.add("js-hidden")}},m={add(e){e.classList.remove("js-hidden")},del(e){e.classList.add("js-hidden")}},o={formEl:document.querySelector(".form-request"),btnEl:document.querySelector("button[data-action=submit]"),ulElem:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnLoad:document.querySelector("button[data-action=load-more]")},c={emptyHits:"We're sorry, but you've reached the end of search results",userTextEmpty:"Search field must not be empty. Please try again!",invalidRequest:"Sorry, there are no images matching your search query. Please try again!"},i=new URLSearchParams({key:"44439688-e504d8637fbba129a9d0d5115",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15});o.formEl.addEventListener("submit",async e=>{e.preventDefault();const r=e.currentTarget.elements.query.value.trim();if(!r){n.warning({position:"topRight",title:"Attention",message:c.userTextEmpty});return}d.addLoader(o.loaderEl),i.set("q",r),i.set("page",1);let a=i.get("page");try{const l=await p(i),t=Math.ceil(l.totalHits/i.get("per_page"));if(a<t?m.add(o.btnLoad):(m.del(o.btnLoad),n.error({position:"topRight",title:"error",message:c.emptyHits})),!l.hits.length)throw new Error("data.hits.length is empty!");o.ulElem.innerHTML="",h(l.hits,o.ulElem)}catch(l){console.log(l),n.error({position:"topRight",title:"error",message:c.invalidRequest}),o.ulElem.innerHTML=""}d.delLoader(o.loaderEl),o.formEl.reset()});o.btnLoad.addEventListener("click",async e=>{e.preventDefault(),d.addLoader(o.loaderEl);let r=i.get("page");i.set("page",++r);try{const a=await p(i),l=Math.ceil(a.totalHits/i.get("per_page"));if(r>=l&&(m.del(o.btnLoad),n.error({position:"topRight",title:"error",message:c.emptyHits})),!a.hits.length)throw new Error("data.hits.length is empty!");h(a.hits,o.ulElem),b()}catch(a){console.log(a)}d.delLoader(o.loaderEl)});function b(){const r=o.ulElem.children[0].getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
