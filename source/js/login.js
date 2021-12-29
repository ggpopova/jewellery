"use strict";
(() => {
  // Login handler

  const keyCodes = {
    ESCAPE: 27,
    TAB: 9
  };

  const body = document.body;
  const loginLink = document.querySelector(`.login-link-js`);
  const loginLinkMobile  = document.querySelector(`.expanded-nav-list__item--login a`);
  const login = document.querySelector(`.login`);
  const loginClose = document.querySelector(`.login__close`);

  const loginToggleClickHandler = (evt) => {
    evt.preventDefault();
    body.classList.toggle(`modalfull-body--opened-modal`);
    login?.classList.toggle(`login--opened`);
  };

  const loginLinkClickHandler = (evt) => {
    loginToggleClickHandler(evt);
    login.querySelector(`a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select`).focus();
    document.addEventListener(`keydown`, handlePopupKeydown);
  };

  const loginLinkMobileClickHandler = (evt) => {
    loginToggleClickHandler(evt);
    login.querySelector(`a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select`).focus();
    document.addEventListener(`keydown`, handlePopupKeydown);
  };

  const loginCloseClickHandler = (evt) => {
    loginToggleClickHandler(evt);
    document.removeEventListener(`keydown`, handlePopupKeydown);
  };

  const loginClickHandler = (evt) => {
    if (evt.target === login) {
      loginCloseClickHandler(evt);
    }
  };

  const handlePopupTabOrShiftAndTabKeydown = (evt) => {
    if (evt.keyCode === keyCodes.TAB) {
      const focusablePopupElements = login.querySelectorAll(`a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select`);

      const firstElement = focusablePopupElements[0];
      const lastElement = focusablePopupElements[focusablePopupElements.length - 1];

      if (document.activeElement === firstElement && evt.shiftKey) {
        evt.preventDefault();
        lastElement.focus();
      } else if (document.activeElement === lastElement && !evt.shiftKey) {
        evt.preventDefault();
        firstElement.focus();
      }
    }
  };

  const keydownHandlers = new Map([
    [keyCodes.ESCAPE, loginCloseClickHandler],
    [keyCodes.TAB, handlePopupTabOrShiftAndTabKeydown]
  ]);

  const handlePopupKeydown = (evt) => {
    const handlePopupKeydownProper = keydownHandlers.get(evt.keyCode);

    if (handlePopupKeydownProper) {
      handlePopupKeydownProper(evt);
    }
  };

  loginLink?.addEventListener(`click`, loginLinkClickHandler);
  loginLinkMobile?.addEventListener(`click`, loginLinkMobileClickHandler);
  login?.addEventListener(`click`, loginClickHandler);
  loginClose?.addEventListener(`click`, loginCloseClickHandler);
  login?.addEventListener(`focus`, loginCloseClickHandler);
})();
