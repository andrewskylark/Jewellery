'use strict';
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
