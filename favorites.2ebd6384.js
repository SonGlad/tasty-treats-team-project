var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire3430;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var d={id:e,exports:{}};return o[e]=d,n.call(d.exports,d,d.exports),d.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequire3430=n),n("1wH5c"),n("aXXUP"),n("h0oKa"),n("aqo1x");(()=>{const e={closeModalBtn:document.querySelector(".close"),modal:document.querySelector("[data-modal]"),modalContent:document.querySelector(".modal"),buttonToSimulateClick:document.querySelector("#imitation")};function o(){e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?document.body.style.overflow="":document.body.style.overflow="hidden"}e.buttonToSimulateClick.addEventListener("click",o),e.closeModalBtn.addEventListener("click",(e=>{e.stopPropagation(),o()})),e.modalContent.addEventListener("click",(e=>{e.stopPropagation()})),e.modal.addEventListener("click",(e=>{e.stopPropagation(),o()})),document.addEventListener("keydown",(function(t){"Escape"===t.key&&(e.modal.classList.contains("is-hidden")||o())}))})(),n("4lxwy"),n("536GA");
//# sourceMappingURL=favorites.2ebd6384.js.map
