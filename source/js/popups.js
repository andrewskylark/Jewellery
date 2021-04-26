'use strict';
(() => {
  const page = document.querySelector(`.page`);
  const popupLinks = page.querySelectorAll(`.popup-link`);

  if (popupLinks) {
    const closePopupLinks = page.querySelectorAll(`.popup__close`);

    const openPopup = (curPopup) => {
      let firstInput = curPopup.querySelector(`input`);
      let inputEmail = curPopup.querySelector(`input[type="email"]`);
      let storedEmail = localStorage.getItem(`user_email`);

      curPopup.classList.add(`popup--opened`);
      page.classList.add(`page--locked`);
      page.style.top = `-${window.scrollY}px`;

      if (firstInput) {
        setTimeout(() => {
          firstInput.focus();
        }, window.consts.LOGIN_TIMEOUT);
      }
      if (inputEmail && storedEmail) {
        setTimeout(() => {
          inputEmail.value = storedEmail;
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

      if (inputEmail) {
        localStorage.setItem(`user_email`, inputEmail.value);
      }
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
