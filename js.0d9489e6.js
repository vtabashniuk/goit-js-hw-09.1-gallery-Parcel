parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdeU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"mOfW":[function(require,module,exports) {
"use strict";function a(a){return a.map(function(a){var e=a.preview,n=a.original,l=a.description;return'\n    <li class="gallery__item">\n        <a class="gallery__link" href="'.concat(n,'">\n            <img class="gallery__image" loading="lazy" src="').concat(e,'" data-source="').concat(n,'" alt="').concat(l,'" />\n        </a>\n    </li>\n    ')}).join(" ")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;
},{}],"u9EY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.imageAtModal=exports.openModalRef=void 0;var e=document.querySelector(".js-lightbox");exports.openModalRef=e;var o=document.querySelector(".lightbox__image");exports.imageAtModal=o;
},{}],"xoRF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("./app.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){return e.default.findIndex(function(e){return e.description===t})}
},{"./app.js":"QdeU"}],"xBUK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=r(require("./app.js")),t=require("./variables");function r(e){return e&&e.__esModule?e:{default:e}}function a(r){0===r&&(r=e.default.length);var a=e.default.find(function(t){return e.default.indexOf(t)===r-1}),i=a.original,u=a.description;t.imageAtModal.src=i,t.imageAtModal.alt=u}
},{"./app.js":"QdeU","./variables":"u9EY"}],"pRxa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=r(require("./app.js")),t=require("./variables");function r(e){return e&&e.__esModule?e:{default:e}}function a(r){r===e.default.length-1&&(r=-1);var a=e.default.find(function(t){return e.default.indexOf(t)===r+1}),i=a.original,u=a.description;t.imageAtModal.src=i,t.imageAtModal.alt=u}
},{"./app.js":"QdeU","./variables":"u9EY"}],"WjTP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=d;var e=require("./variables"),r=i(require("./get-current-image-index")),a=i(require("./render-previous-image")),t=i(require("./render-next-image")),u=i(require("./close-modal"));function i(e){return e&&e.__esModule?e:{default:e}}function d(i){var d=(0,r.default)(e.imageAtModal.alt);switch(i.code){case"ArrowLeft":(0,a.default)(d);break;case"ArrowRight":(0,t.default)(d);break;case"Escape":(0,u.default)()}}
},{"./variables":"u9EY","./get-current-image-index":"xoRF","./render-previous-image":"xBUK","./render-next-image":"pRxa","./close-modal":"vwdI"}],"vwdI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e=r(require("./on-keypress-event")),t=require("./variables");function r(e){return e&&e.__esModule?e:{default:e}}function o(){t.openModalRef.classList.remove("is-open"),window.removeEventListener("keydown",e.default),t.imageAtModal.src="",t.imageAtModal.alt=""}
},{"./on-keypress-event":"WjTP","./variables":"u9EY"}],"U8x8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var t=e(require("./close-modal"));function e(t){return t&&t.__esModule?t:{default:t}}function o(e){(e.target.classList.contains("lightbox__overlay")||e.target.classList.contains("lightbox__button"))&&(0,t.default)()}
},{"./close-modal":"vwdI"}],"FZuR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=d;var e=r(require("./on-click-close-modal")),t=r(require("./on-keypress-event")),a=require("./variables");function r(e){return e&&e.__esModule?e:{default:e}}function d(r){r.preventDefault(),"IMG"===r.target.nodeName&&(a.openModalRef.classList.add("is-open"),a.imageAtModal.src=r.target.dataset.source,a.imageAtModal.alt=r.target.alt,a.openModalRef.addEventListener("click",e.default),window.addEventListener("keydown",t.default))}
},{"./on-click-close-modal":"U8x8","./on-keypress-event":"WjTP","./variables":"u9EY"}],"QvaY":[function(require,module,exports) {
"use strict";var e=a(require("./app.js")),r=a(require("./gallery-items-render")),t=a(require("./on-click-open-modal.js"));function a(e){return e&&e.__esModule?e:{default:e}}var l=document.querySelector(".js-gallery");l.insertAdjacentHTML("afterbegin",(0,r.default)(e.default)),l.addEventListener("click",t.default);
},{"./app.js":"QdeU","./gallery-items-render":"mOfW","./on-click-open-modal.js":"FZuR"}]},{},["QvaY"], null)
//# sourceMappingURL=/goit-js-hw-09.1-gallery-Parcel/js.0d9489e6.js.map