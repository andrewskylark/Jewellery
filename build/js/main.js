'use strict';
// (() => {
//   const noJsElems = document.querySelectorAll(`[class*="--no-js"]`);
//   if (noJsElems) {
//     noJsElems.forEach((elem) => {
//       elem.classList.remove(`[class*="--no-js"]`);
//     });
//   }
// })();
const ESC_KEY = `Escape`;

(() => {
  const page = document.querySelector(`.page`);
  const nav = page.querySelector(`.nav`);
  const navToggle = page.querySelector(`.page-header__toggle`);
  const headerTop = page.querySelector(`.page-header__top`);

  const isEscEvt = (evt, action) => {
    if (evt.key === ESC_KEY) {
      action();
    }
  };
  const onMenuEscPress = (evt) => {
    isEscEvt(evt, closeNav);
  };
  const onElemEnableJs = (elemClass) => {
    document.querySelector(`.${elemClass}`).classList.remove(`${elemClass}--no-js`);
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
    document.removeEventListener(`keydown`, closeNav);
  };

  onElemEnableJs(`page-header__top`);
  onElemEnableJs(`nav`);

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
