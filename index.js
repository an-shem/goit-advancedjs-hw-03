import{a as f,S as m,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=void 0;f.defaults.baseURL="https://pixabay.com/api/";async function g(i){return(await f.get("",{params:{key:p,q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const u=document.querySelector(".gallery"),c=document.querySelector(".loader");console.log("loaderRef :>> ",c);const y=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(i){return i.map(({webformatURL:a,largeImageURL:r,tags:o,likes:e,views:t,comments:s,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${o}"
              loading="lazy"
            />
          </a>

          <div class="image-info">
            <div class="image-info-item">
              <p class="image-info-label">Likes</p>
              <p class="image-info-value">${e}</p>
            </div>

            <div class="image-info-item">
              <p class="image-info-label">Views</p>
              <p class="image-info-value">${t}</p>
            </div>

            <div class="image-info-item">
              <p class="image-info-label">Comments</p>
              <p class="image-info-value">${s}</p>
            </div>

            <div class="image-info-item">
              <p class="image-info-label">Downloads</p>
              <p class="image-info-value">${d}</p>
            </div>
          </div>
        </li>
      `).join("")}function v(i){const a=h(i);u.innerHTML=a,y.refresh()}function L(){u.innerHTML=""}function b(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const l=document.querySelector(".form"),q=l.elements["search-text"];n.settings({position:"topRight"});l.addEventListener("submit",i=>{i.preventDefault();const a=q.value.trim();if(l.reset(),!a){n.warning({message:"Please enter a search query."});return}L(),b(),g(a).then(({hits:r})=>{if(r.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");v(r)}).catch(r=>{n.warning({message:r.message})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
