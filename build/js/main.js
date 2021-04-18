/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/accordion.js":
/*!********************************!*\
  !*** ./source/js/accordion.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(() => {
  const accBtns = document.querySelectorAll(`.accordion-btn`);

  if (accBtns) {
    for (let btn of accBtns) {

      btn.addEventListener(`click`, () => {
        let panel = btn.nextElementSibling;

        if (panel.classList.contains(`accordion-content--active`)) {
          panel.classList.remove(`accordion-content--active`);
        } else {
          let active = document.querySelector(`.accordion-content--active`);
          if (active) {
            active.classList.remove(`accordion-content--active`);
          }
          panel.classList.add(`accordion-content--active`);
        }
      });
    }
  }
})();


/***/ }),

/***/ "./source/js/consts.js":
/*!*****************************!*\
  !*** ./source/js/consts.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(() => {
  window.consts = {
    ENTER_KEY: `Enter`,
    ESCAPE_KEY: `Escape`
  };
})();


/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// const ESC_KEY = `Escape`;

(() => {
  const page = document.querySelector(`.page`);
  const nav = page.querySelector(`.nav`);
  const navToggle = page.querySelector(`.page-header__toggle`);
  const headerTop = page.querySelector(`.page-header__top`);

  // const isEscEvt = (evt, action) => {
  //   if (evt.key === window.consts.ESC_KEY) {
  //     action();
  //   }
  // };
  const onMenuEscPress = (evt) => {
    window.consts.isEscEvt(evt, closeNav);
  };
  // const onElemEnableJs = (elemClass) => {
  //   document.querySelector(`.${elemClass}`).classList.remove(`${elemClass}--no-js`);
  // };
  const openNav = () => {
    nav.classList.remove(`nav--closed`);
    nav.classList.add(`nav--opened`);
    headerTop.classList.add(`page-header__top--nav-opened`);
    page.classList.add(`page--locked`);
  };
  const closeNav = () => {
    nav.classList.remove(`nav--opened`);
    nav.classList.add(`nav--closed`);
    headerTop.classList.remove(`page-header__top--nav-opened`);
    page.classList.remove(`page--locked`);

    document.body.style.top = ``;

    window.removeEventListener(`resize`, closeNav);
    document.removeEventListener(`keydown`, closeNav);
  };

  // onElemEnableJs(`page-header__top`);
  // onElemEnableJs(`nav`);

  if (navToggle) {
    navToggle.addEventListener(`click`, () => {

      if (nav.classList.contains(`nav--closed`)) {
        const links = document.querySelectorAll(`.site-list__link`);
        const firstLink = document.querySelector(`.site-list__link:first-of-type`);

        document.body.style.top = `-${window.scrollY}px`;

        openNav();
        firstLink.focus();

        for (let link of links) {
          link.addEventListener(`click`, closeNav);
        }

        window.addEventListener(`resize`, closeNav);
        document.addEventListener(`keydown`, onMenuEscPress);

      } else {
        const scrollY = document.body.style.top;

        window.scrollTo(0, parseInt(scrollY || `0`, 10) * -1);

        closeNav();
      }
    });
  }
})();


/***/ }),

/***/ "./source/js/no-js.js":
/*!****************************!*\
  !*** ./source/js/no-js.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(() => {
  const onElemEnableJs = (elemClass) => {
    document.querySelector(`.${elemClass}`).classList.remove(`${elemClass}--no-js`);
  };

  onElemEnableJs(`page-header__top`);
  onElemEnableJs(`nav`);
})();


/***/ }),

/***/ "./source/js/utils.js":
/*!****************************!*\
  !*** ./source/js/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.utils = {
  isEscEvt: (evt, action) => {
    if (evt.key === window.consts.ESC_KEY) {
      action();
    }
  },
  isEnterEvt: (evt, action) => {
    if (evt.key === window.consts.ENTER_KEY) {
      action();
    }
  },
  getCoords: (elem) => {
    const box = elem.getBoundingClientRect();

    return {
      x: box.left + pageXOffset,
      y: box.top + pageYOffset
    };
  }
};


/***/ }),

/***/ 0:
/*!**************************************************************************************************************************!*\
  !*** multi ./source/js/no-js.js ./source/js/consts.js ./source/js/utils.js ./source/js/menu.js ./source/js/accordion.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./source/js/no-js.js */"./source/js/no-js.js");
__webpack_require__(/*! ./source/js/consts.js */"./source/js/consts.js");
__webpack_require__(/*! ./source/js/utils.js */"./source/js/utils.js");
__webpack_require__(/*! ./source/js/menu.js */"./source/js/menu.js");
module.exports = __webpack_require__(/*! ./source/js/accordion.js */"./source/js/accordion.js");


/***/ })

/******/ });