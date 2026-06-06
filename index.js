import{a as f,S as m,i}from"./assets/vendor-BezXTN6Z.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="56194182-443121e89078ae09ebe47cc6e",y="https://pixabay.com/api/";function h(o){return f.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:a,comments:p,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="gallery-info">
          <p><b>Likes</b><span>${t}</span></p>
          <p><b>Views</b><span>${a}</span></p>
          <p><b>Comments</b><span>${p}</span></p>
          <p><b>Downloads</b><span>${d}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function q(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search query!",position:"topRight"});return}S(),q(),h(r).then(s=>{if(s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits)}).catch(s=>{i.error({message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{w(),l.reset()})});
//# sourceMappingURL=index.js.map
