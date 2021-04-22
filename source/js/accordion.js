'use strict';
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
