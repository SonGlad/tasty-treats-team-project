function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=n.parcelRequire3430;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){a[e]=n},n.parcelRequire3430=l),l("1wH5c"),l("aXXUP"),l("h0oKa"),l("aqo1x");var o=()=>{const e={closeModalBtn:document.querySelector(".close"),modal:document.querySelector("[data-modal]"),modalContent:document.querySelector(".modal"),buttonToSimulateClick:document.querySelector("#imitation")};function n(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?document.body.style.overflow="":document.body.style.overflow="hidden"}e.buttonToSimulateClick.addEventListener("click",n),e.closeModalBtn.addEventListener("click",(e=>{e.stopPropagation(),n()})),e.modalContent.addEventListener("click",(e=>{e.stopPropagation()})),e.modal.addEventListener("click",(e=>{e.stopPropagation(),n()})),window.addEventListener("keydown",(function(e){"Escape"===e.key&&n()}))},r=l("4K603").default;o(),r();var c=e(l("amrNH")).template({1:function(e,n,t,a,l){var o,r=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,i="function",s=e.escapeExpression,d=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='card_favourites' id=\""+s(typeof(o=null!=(o=d(t,"category")||(null!=n?d(n,"category"):n))?o:c)===i?o.call(r,{name:"category",hash:{},data:l,loc:{start:{line:2,column:34},end:{line:2,column:46}}}):o)+"\">\n    <button class='card_favourites_btn button'>\n      <svg class='card_heart' width='22' height='22' viewBox='0 0 32 32'>\n        <path\n          stroke='#F8F8F8'\n          opacity='1'\n          stroke-linejoin='round'\n          stroke-linecap='round'\n          stroke-miterlimit='4'\n          stroke-width='2.9091'\n          d='M27.787 6.147c-0.681-0.681-1.49-1.222-2.38-1.591s-1.844-0.559-2.807-0.559-1.917 0.19-2.807 0.559c-0.89 0.369-1.699 0.909-2.38 1.591l-1.413 1.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811 0.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s0.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787c0.681-0.681 1.222-1.49 1.591-2.38s0.559-1.844 0.559-2.807c0-0.963-0.19-1.917-0.559-2.807s-0.909-1.699-1.591-2.38v0z'\n        ></path>\n      </svg>\n    </button>\n    <img src='"+s(typeof(o=null!=(o=d(t,"src")||(null!=n?d(n,"src"):n))?o:c)===i?o.call(r,{name:"src",hash:{},data:l,loc:{start:{line:16,column:14},end:{line:16,column:21}}}):o)+"' alt='' class='card_background' />\n    <div class='card_content-container'>\n      <div class='card_text-container'>\n        <h3 class='card_title'>"+s(typeof(o=null!=(o=d(t,"title")||(null!=n?d(n,"title"):n))?o:c)===i?o.call(r,{name:"title",hash:{},data:l,loc:{start:{line:19,column:31},end:{line:19,column:40}}}):o)+"</h3>\n        <p class='card_description'>"+s(typeof(o=null!=(o=d(t,"description")||(null!=n?d(n,"description"):n))?o:c)===i?o.call(r,{name:"description",hash:{},data:l,loc:{start:{line:20,column:36},end:{line:20,column:51}}}):o)+"</p>\n      </div>\n      <div class='card_footer-container'>\n        <div class='card_star-rating'>\n          <p class='star-rating_value'>"+s(typeof(o=null!=(o=d(t,"starRating")||(null!=n?d(n,"starRating"):n))?o:c)===i?o.call(r,{name:"starRating",hash:{},data:l,loc:{start:{line:24,column:39},end:{line:24,column:53}}}):o)+"</p>\n          <svg class='star-favorite' width='12' height='12' id=\"all-stars\" viewBox='0 0 14 14'>\n            <path\n              id='Star 1'\n              d='M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41221 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146678 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z'\n              sroke='black'\n            />\n          </svg>\n          <svg class='star-favorite' width='12' height='12' id=\"all-stars\" viewBox='0 0 14 14'>\n            <path\n              id='Star 1'\n              d='M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41221 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146678 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z'\n              sroke='black'\n            />\n          </svg>\n          <svg class='star-favorite' width='12' height='12' id=\"all-stars\" viewBox='0 0 14 14'>\n            <path\n              id='Star 1'\n              d='M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41221 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146678 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z'\n              sroke='black'\n            />\n          </svg>\n          <svg class='star-favorite' width='12' height='12' id=\"all-stars\" viewBox='0 0 14 14'>\n            <path\n              id='Star 1'\n              d='M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41221 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146678 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z'\n              sroke='black'\n            />\n          </svg>\n          <svg class='star-favorite' width='12' height='12' id=\"all-stars\" viewBox='0 0 14 14'>\n            <path\n              id='Star 1'\n              d='M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41221 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146678 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z'\n            />\n          </svg>\n        </div>\n        <button id=\""+s(typeof(o=null!=(o=d(t,"ident")||(null!=n?d(n,"ident"):n))?o:c)===i?o.call(r,{name:"ident",hash:{},data:l,loc:{start:{line:60,column:20},end:{line:60,column:29}}}):o)+"\" class='card_btn'>See recipe</button>\n      </div>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:64,column:9}}}))?o:""},useData:!0});var i=e(l("amrNH")).template({1:function(e,n,t,a,l){var o,r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="categories-list-item">\n  <button class="categories-btn">'+e.escapeExpression("function"==typeof(o=null!=(o=r(t,"category")||(null!=n?r(n,"category"):n))?o:e.hooks.helperMissing)?o.call(null!=n?n:e.nullContext||{},{name:"category",hash:{},data:l,loc:{start:{line:3,column:33},end:{line:3,column:45}}}):o)+"</button>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:5,column:9}}}))?o:""},useData:!0}),s=l("adX3G"),d=l("6qF4B"),u=l("7IWpc"),p=l("g0zcb"),h=l("dY0Bw");const f=document.querySelector(".favorite-render-cards"),m=document.querySelector(".categories-list");let v=(0,p.load)("cardData");function C(){v=(0,p.load)("cardData");const e=[],n=new Set,t=document.querySelector(".no-recipe-content");t.style.display=v?"none":"flex",v&&v.forEach((t=>{n.has(t.category)||(n.add(t.category),e.push({category:t.category}))})),0===n.size||n.has("All categories")||e.unshift({category:"All categories"}),f.insertAdjacentHTML("beforeend",c(v)),m.insertAdjacentHTML("beforeend",i(e)),(0,h.eventListenerFavorites)(),(0,u.default)(),(0,s.fillStars)(),(0,d.cardHearts)(),function(){const e=document.querySelectorAll(".card_favourites");document.querySelectorAll(".categories-btn").forEach((n=>{n.addEventListener("click",(n=>{const t=n.target.textContent;e.forEach((e=>{"All categories"===t||e.id===t?e.style.display="":e.style.display="none"}))}))}))}(),document.querySelectorAll(".card_favourites_btn").forEach((e=>{e.addEventListener("click",(()=>{f.innerHTML="",m.innerHTML="",C()}))}))}C();
//# sourceMappingURL=favorites.7b9d3977.js.map
