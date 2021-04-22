'use strict';
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
})();
