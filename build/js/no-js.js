'use strict';
(() => {
  const onElemEnableJs = (elemClass) => {
    document.querySelector(`.${elemClass}`).classList.remove(`${elemClass}--no-js`);
  };

  onElemEnableJs(`page-header__top`);
  onElemEnableJs(`nav`);
  onElemEnableJs(`accordion-container`);
})();
