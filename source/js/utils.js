'use strict';

window.utils = {
  isEscEvt: (evt, action) => {
    if (evt.key === window.consts.ESC_KEY) {
      action();
    }
  },
  isEnterEvt: (evt, action) => {
    if (evt.key === window.consts.ENTER_KEY) {
      action();
    }
  },
  getCoords: (elem) => {
    const box = elem.getBoundingClientRect();

    return {
      x: box.left + pageXOffset,
      y: box.top + pageYOffset
    };
  }
};
