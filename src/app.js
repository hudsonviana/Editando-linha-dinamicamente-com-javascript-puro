/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/addToCart.js":
/*!******************************!*\
  !*** ./modules/addToCart.js ***!
  \******************************/
/***/ (() => {

const btnsAddToCart = document.querySelectorAll('#btn_add_to_cart');
btnsAddToCart.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(btn.getAttribute('data-id'));
  });
});

/***/ }),

/***/ "./modules/back.js":
/*!*************************!*\
  !*** ./modules/back.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide */ "./modules/hide.js");

const btnsBack = document.querySelectorAll('#btn_back');
btnsBack.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    const inputEditValue = document.querySelector('#input' + id);
    const nameEditValue = document.querySelector('#name' + id);
    nameEditValue.innerHTML = inputEditValue.value;
    (0,_hide__WEBPACK_IMPORTED_MODULE_0__["default"])(['#edit_li' + id, '#list_li' + id]);
  });
});

/***/ }),

/***/ "./modules/edit.js":
/*!*************************!*\
  !*** ./modules/edit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide */ "./modules/hide.js");

const btnsEditElement = document.querySelectorAll('#btn_edit_element');
btnsEditElement.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    (0,_hide__WEBPACK_IMPORTED_MODULE_0__["default"])(['#edit_li' + id, '#list_li' + id]);
  });
});

/***/ }),

/***/ "./modules/hide.js":
/*!*************************!*\
  !*** ./modules/hide.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toggleHideClass = elements => {
  elements.forEach(e => {
    document.querySelector(e).classList.toggle('hide');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleHideClass);

/***/ }),

/***/ "./modules/list.js":
/*!*************************!*\
  !*** ./modules/list.js ***!
  \*************************/
/***/ (() => {

const books = [{
  id: 1,
  name: 'Book 1'
}, {
  id: 2,
  name: 'Book 2'
}, {
  id: 3,
  name: 'Book 3'
}, {
  id: 4,
  name: 'Book 4'
}];
const booksElement = document.querySelector('#books');

function render() {
  let bookHTML = '<ul>';
  books.forEach((book, index) => {
    bookHTML += `
            <li id="list_li${book.id}">
                <span id="name${book.id}">${book.name}</span>
                <button id="btn_add_to_cart" data-id="${book.id}">Add to Cart</button>
                <button id="btn_remove_element" data-id="${book.id}">Remove</button>
                <button id="btn_edit_element" data-id="${book.id}">Edit</button>
            </li>
            <li id="edit_li${book.id}" class="hide">
                <input type="text" id="input${book.id}" value="${book.name}" />
                <button id="btn_back" data-id="${book.id}">Back</button>
                <button id="btn_save" data-id="${book.id}">Save</button>
            </li>
        `;
  });
  bookHTML += '</ul>';
  booksElement.innerHTML = bookHTML;
}

render();

/***/ }),

/***/ "./modules/remove.js":
/*!***************************!*\
  !*** ./modules/remove.js ***!
  \***************************/
/***/ (() => {

const btnsRemoveElement = document.querySelectorAll('#btn_remove_element');
btnsRemoveElement.forEach(btn => {
  btn.addEventListener('click', function (event) {
    // console.log(this.closest('li'));
    this.closest('li').remove(); // esse comando só funciona com uma function normal, ou seja, não funciona com arrow function
  });
});

/***/ }),

/***/ "./modules/save.js":
/*!*************************!*\
  !*** ./modules/save.js ***!
  \*************************/
/***/ (() => {

const btnsSave = document.querySelectorAll('#btn_save');
btnsSave.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    console.log('save ' + id);
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/list */ "./modules/list.js");
/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_list__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_addToCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addToCart */ "./modules/addToCart.js");
/* harmony import */ var _modules_addToCart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_addToCart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/remove */ "./modules/remove.js");
/* harmony import */ var _modules_remove__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_remove__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/edit */ "./modules/edit.js");
/* harmony import */ var _modules_back__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/back */ "./modules/back.js");
/* harmony import */ var _modules_save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/save */ "./modules/save.js");
/* harmony import */ var _modules_save__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_save__WEBPACK_IMPORTED_MODULE_5__);






})();

/******/ })()
;
//# sourceMappingURL=app.js.map