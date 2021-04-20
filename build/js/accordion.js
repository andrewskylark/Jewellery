'use strict';
(() => {
  const accBtns = document.querySelectorAll(`.accordion-btn`);

  if (accBtns) {
    const activeElHandler = (el, className) => {
      if (el.classList.contains(`${className}--active`)) {
        el.classList.remove(`${className}--active`);
      } else {
        let active = document.querySelector(`.${className}--active`);
        if (active) {
          active.classList.remove(`${className}--active`);
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
