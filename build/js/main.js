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
  const accContainer = document.querySelector(`.accordion-container`);

  if (accContainer) {
    const accBtns = accContainer.querySelectorAll(`.accordion-btn`);

    const activeElHandler = (el, className) => {
      if (el.classList.contains(`${className}--active`)) {
        el.classList.remove(`${className}--active`);
      } else {

        if (!accContainer.classList.contains(`accordion-container--no-wrap`)) {
          let active = accContainer.querySelector(`.${className}--active`);
          if (active) {
            active.classList.remove(`${className}--active`);
          }
        }

        el.classList.add(`${className}--active`);
      }
    };

    for (let btn of accBtns) {

      btn.addEventListener(`click`, () => {
        let panel = btn.nextElementSibling;

        activeElHandler(panel, `accordion-content`);
        activeElHandler(btn, `accordion-btn`);
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
    ESCAPE_KEY: `Escape`,
    MOBILE_WIDTH: `320`,
    TABLET_WIDTH: `768`,
    DESKTOP_WIDTH: `1024`,
    DEBOUNCE_INTERVAL: 500,
    LOGIN_TIMEOUT: 800
  };
})();


/***/ }),

/***/ "./source/js/filter.js":
/*!*****************************!*\
  !*** ./source/js/filter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(() => {
  const page = document.querySelector(`.page`);
  const showBtn = page.querySelector(`.filter-btn-show`);

  if (showBtn) {
    const popupFilter = page.querySelector(`.popup-filter`);

    const openFilter = () => {
      if (popupFilter) {
        const firstBtn = popupFilter.querySelector(`button`);

        if (firstBtn) {
          setTimeout(() => {
            firstBtn.focus();
          }, window.consts.LOGIN_TIMEOUT);
        }
        popupFilter.classList.add(`popup-filter--opened`);
        page.classList.add(`page--locked`);
        page.style.top = `-${window.scrollY}px`;

        popupFilter.addEventListener(`click`, (evt) => {
          if (evt.target.classList.contains(`popup-filter`) || evt.target.classList.contains(`popup-filter__close`)) {
            closeFilter();
          }
        });
        window.addEventListener(`keydown`, (evt) => {
          if (evt.key === window.consts.ESCAPE_KEY) {
            closeFilter();
          }
        });
        window.addEventListener(`resize`, closeFilter);
      }
    };

    const closeFilter = () => {
      popupFilter.classList.remove(`popup-filter--opened`);
      page.classList.remove(`page--locked`);
      page.style.top = ``;
    };

    showBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      openFilter();
    });
  }
})();


/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(() => {
  const page = document.querySelector(`.page`);
  const nav = page.querySelector(`.nav`);
  const navToggle = page.querySelector(`.page-header__toggle`);
  const headerTop = page.querySelector(`.page-header__top`);

  const onMenuEscPress = (evt) => {
    window.utils.isEscEvt(evt, closeNav);
  };

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
    document.removeEventListener(`keydown`, onMenuEscPress);
  };

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
    let elem = document.querySelector(`.${elemClass}`);

    if (elem) {
      elem.classList.remove(`${elemClass}--no-js`);
    }
  };

  onElemEnableJs(`page-header__top`);
  onElemEnableJs(`nav`);
  onElemEnableJs(`accordion-container`);
  onElemEnableJs(`popup-filter`);
})();


/***/ }),

/***/ "./source/js/popups.js":
/*!*****************************!*\
  !*** ./source/js/popups.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(() => {
  const page = document.querySelector(`.page`);
  const popupLinks = page.querySelectorAll(`.popup-link`);

  if (popupLinks) {
    const closePopupLinks = page.querySelectorAll(`.popup__close`);

    const openPopup = (curPopup) => {
      let firstInput = curPopup.querySelector(`input`);
      let firstLink = curPopup.querySelector(`.popup__content a`);
      let inputEmail = curPopup.querySelector(`input[type="email"]`);
      let isStorageSupport = true;
      let storage = ``;

      curPopup.classList.add(`popup--opened`);
      page.classList.add(`page--locked`);
      page.style.top = `-${window.scrollY}px`;

      if (firstLink) {
        setTimeout(() => {
          firstLink.focus();
        }, window.consts.LOGIN_TIMEOUT);
      }

      if (firstInput) {
        setTimeout(() => {
          firstInput.focus();
        }, window.consts.LOGIN_TIMEOUT);
      }
      if (inputEmail) {
        setTimeout(() => {
          try {
            storage = localStorage.getItem(`user_email`);
          } catch (err) {
            isStorageSupport = false;
          }

          if (storage) {
            inputEmail.value = storage;
          }
        }, window.consts.LOGIN_TIMEOUT);
      }

      if (inputEmail && isStorageSupport) {
        setTimeout(() => {
          localStorage.setItem(`user_email`, inputEmail.value);
        }, window.consts.LOGIN_TIMEOUT);
      }

      curPopup.addEventListener(`click`, (evt) => {
        if (!evt.target.closest(`.popup__content`)) {
          closePopup(evt.target.closest(`.popup`));
        }
      });
      window.addEventListener(`keydown`, (evt) => {
        if (evt.key === window.consts.ESCAPE_KEY) {
          closePopup(curPopup);
        }
      });
    };

    const closePopup = (curPopup) => {
      curPopup.classList.remove(`popup--opened`);
      page.classList.remove(`page--locked`);
      page.style.top = ``;
    };

    if (closePopupLinks) {
      for (let closeLink of closePopupLinks) {
        closeLink.addEventListener(`click`, (evt) => {
          evt.preventDefault();

          const curPopup = closeLink.closest(`.popup`);

          closePopup(curPopup);
        });
      }
    }

    for (let link of popupLinks) {
      link.addEventListener(`click`, (evt) => {
        evt.preventDefault();

        const popupName = link.getAttribute(`href`);
        const curPopup = page.querySelector(popupName);

        openPopup(curPopup);
      });
    }
  }
})();


/***/ }),

/***/ "./source/js/slider.js":
/*!*****************************!*\
  !*** ./source/js/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(() => {
  const container = document.querySelector(`.slider`);

  const addIndicators = () => {
    const slider = container.querySelector(`.slider__list`);
    let renderedIndicators = container.querySelector(`.slider__indicators`);
    let viewport = document.documentElement.clientWidth;

    if (renderedIndicators) {
      renderedIndicators.remove();
    }

    let moveStep = container.offsetWidth;
    let sliderLength = slider.offsetWidth;
    let slidesCount = sliderLength / moveStep;
    let indicatorsContainer = document.createElement(`ol`);
    indicatorsContainer.classList.add(`slider__indicators`);

    if (viewport < window.consts.TABLET_WIDTH) {
      let sliderIndicatorsItem = document.createElement(`li`);
      sliderIndicatorsItem.textContent = `1 of ${slidesCount}`;
      indicatorsContainer.appendChild(sliderIndicatorsItem);
    } else {

      for (let i = 0; i < slidesCount; i++) {
        let sliderIndicatorsItem = document.createElement(`li`);
        let btn = document.createElement(`button`);
        sliderIndicatorsItem.appendChild(btn);
        btn.textContent = i + 1;
        if (i === 0) {
          btn.classList.add(`active`);
        }
        sliderIndicatorsItem.setAttribute(`data-slide-to`, i);
        indicatorsContainer.appendChild(sliderIndicatorsItem);
      }
    }
    container.appendChild(indicatorsContainer);
  };

  const initiateSlider = () => {
    const slider = container.querySelector(`.slider__list`);
    const left = container.querySelector(`.slider__btn--left`);
    const right = container.querySelector(`.slider__btn--right`);

    slider.style.transform = ``;
    addIndicators();

    let slide = 0;
    let viewport = document.documentElement.clientWidth;
    let moveStep = container.offsetWidth;
    let sliderLength = slider.offsetWidth;
    let slidesCount = sliderLength / moveStep;
    let indicatorContainer = container.querySelector(`.slider__indicators`);
    let indicatorItems = container.querySelectorAll(`.slider__indicators button`);

    if (viewport >= window.consts.TABLET_WIDTH) {

      indicatorItems.forEach((el) => {
        el.addEventListener(`click`, () => {
          if (!el.classList.contains(`active`)) {
            let slideTo = el.parentElement.getAttribute(`data-slide-to`);

            slide = slideTo;
            indicatorContainer.querySelector(`.active`).classList.remove(`active`);
            el.classList.add(`active`);
            slider.style.transform = `translateX(-${slideTo * moveStep}px)`;
          }
        });
      });

      right.addEventListener(`click`, () => {
        if (slide < (slidesCount - 1)) {
          slide++;
        } else {
          slide = 0;
        }

        slider.style.transform = `translateX(-${slide * moveStep}px)`;
        indicatorContainer.querySelector(`.active`).classList.remove(`active`);
        indicatorItems[slide].classList.add(`active`);
      });

      left.addEventListener(`click`, () => {
        if (slide > 0) {
          slide--;
        } else {
          slide = (slidesCount - 1);
        }

        slider.style.transform = `translateX(-${slide * moveStep}px)`;
        indicatorContainer.querySelector(`.active`).classList.remove(`active`);
        indicatorItems[slide].classList.add(`active`);
      });

    } else {

      let indicatorMobile = container.querySelector(`.slider__indicators li`);

      let xDown = null;
      let yDown = null;

      const handleTouchStart = (evt) => {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
      };
      const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
          return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {

            if (slide < (slidesCount - 1)) {
              slide++;
            } else {
              slide = 0;
            }

            slider.style.transform = `translateX(-${slide * moveStep}px)`;
            indicatorMobile.innerHTML = `${slide + 1} of ${slidesCount}`;

          } else {

            if (slide > 0) {
              slide--;
            } else {
              slide = (slidesCount - 1);
            }

            slider.style.transform = `translateX(-${slide * moveStep}px)`;
            indicatorMobile.innerHTML = `${slide + 1} of ${slidesCount}`;
          }
        }
        xDown = null;
        yDown = null;
      };

      slider.addEventListener(`touchstart`, handleTouchStart, false);
      slider.addEventListener(`touchmove`, handleTouchMove, false);
    }
  };

  if (container) {
    initiateSlider();

    window.addEventListener(`resize`, window.utils.debounce(() => {
      initiateSlider();
    }));
  }
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
    if (evt.key === window.consts.ESCAPE_KEY) {
      action();
    }
  },
  isEnterEvt: (evt, action) => {
    if (evt.key === window.consts.ENTER_KEY) {
      action();
    }
  },
  debounce: (cb) => {
    let lastTimeout = null;

    return (...args) => {

      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(() => {
        cb.apply(null, [...args]);
      }, window.consts.DEBOUNCE_INTERVAL);
    };
  }
};


/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************************************************!*\
  !*** multi ./source/js/no-js.js ./source/js/consts.js ./source/js/utils.js ./source/js/menu.js ./source/js/slider.js ./source/js/accordion.js ./source/js/popups.js ./source/js/filter.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./source/js/no-js.js */"./source/js/no-js.js");
__webpack_require__(/*! ./source/js/consts.js */"./source/js/consts.js");
__webpack_require__(/*! ./source/js/utils.js */"./source/js/utils.js");
__webpack_require__(/*! ./source/js/menu.js */"./source/js/menu.js");
__webpack_require__(/*! ./source/js/slider.js */"./source/js/slider.js");
__webpack_require__(/*! ./source/js/accordion.js */"./source/js/accordion.js");
__webpack_require__(/*! ./source/js/popups.js */"./source/js/popups.js");
module.exports = __webpack_require__(/*! ./source/js/filter.js */"./source/js/filter.js");


/***/ })

/******/ });