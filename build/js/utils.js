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
  debounce: (cb) => {
    let lastTimeout = null;

    return (...args) => {

      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(() => {
        cb.apply(null, [...args]);
      }, window.consts.DEBOUNCE_INTERVAL);
    };
  }
};
