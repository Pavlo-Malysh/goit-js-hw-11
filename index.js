import{a as u,S as h,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com";function g(s){return u.get("/api/",{params:{key:"50436356-4cb7de4c874e77a26622e7211",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const m=document.querySelector(".gallery"),d=document.querySelector(".loader");function y(s){const r=b(s);m.innerHTML=r,S.refresh()}function L(s){const{webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:a,downloads:f}=s,p=o.split(",").slice(0,4).join(",");return`<li class="gallery-item"><a class="gallery-link" href="${i}"><img class="gallery-image" src="${r}" alt="${p}">
        <ul class="text-list">
          <li class="text-item">
            <h3  class="subtitle">Likes</h3>
            <p  class="text">${e}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Views</h3>
            <p  class="text">${t}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Comments</h3>
            <p  class="text">${a}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Download</h3>
            <p  class="text">${f}</p>
          </li>
        </ul>
      </a></li>`}function b(s){return s.map(L).join(`


`)}function x(){m.innerHTML=""}function w(){d.removeAttribute("hidden")}function n(){d.setAttribute("hidden","true")}const S=new h(".gallery-item .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250}),c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();let r=s.target.elements["search-text"].value.trim().toLowerCase();if(r===""){l.warning({message:"The search field is empty. Please enter a keyword.",position:"topRight"});return}x(),w(),g(r).then(i=>{if(!i.length){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:400});return}y(i),n()}).catch(i=>{l.error({message:"An error occurred. Please try again later.",position:"topRight",maxWidth:400})}).finally(()=>{n()}),c.reset()});
//# sourceMappingURL=index.js.map
