'use strict';
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
