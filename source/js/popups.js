'use strict';
(() => {
  const page = document.querySelector(`.page`);
  const popupLinks = page.querySelectorAll(`.popup-link`);
  // const lockPadding = document.querySelector(`.lock-padding`);

  // let unlock = true;
  // const TIMEOUT = 800;

  if (popupLinks) {
    const closePopupLinks = page.querySelectorAll(`.popup__close`);

    // const onPopupEscPress = (evt, curPopup) => {
    //   window.utils.isEscEvt(evt, closePopup(curPopup));
    // };

    const openPopup = (curPopup) => {
      curPopup.classList.add(`popup--opened`);
      page.classList.add(`page--locked`);
      page.style.top = `-${window.scrollY}px`;

      curPopup.addEventListener(`click`, (evt) => {
        if (!evt.target.closest(`.popup__content`)) {
          closePopup(evt.target.closest(`.popup`));
        }
      });

      window.addEventListener(`keydown`, (evt) => {
        window.utils.isEscEvt(evt, closePopup(curPopup));
      });
      // window.addEventListener(`resize`, closePopup(curPopup));
    };

    const closePopup = (curPopup) => {
      curPopup.classList.remove(`popup--opened`);
      page.classList.remove(`page--locked`);
      page.style.top = ``;

      // window.removeEventListener(`keydown`, onPopupEscPress(curPopup));
      // window.removeEventListener(`resize`, closePopup(curPopup));
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

        const popupName = link.getAttribute(`href`).replace(`#`, `.`);
        const curPopup = page.querySelector(popupName);

        openPopup(curPopup);
      });
    }
  }
})();
