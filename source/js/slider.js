'use strict';
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

            if (slide > 0) {
              slide--;
            } else {
              slide = (slidesCount - 1);
            }

            slider.style.transform = `translateX(-${slide * moveStep}px)`;
            indicatorMobile.innerHTML = `${slide + 1} of ${slidesCount}`;

          } else {

            if (slide < (slidesCount - 1)) {
              slide++;
            } else {
              slide = 0;
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
