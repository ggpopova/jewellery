"use strict";
(() => {
// Login handler

const loginLink = document.querySelector(`.login-link-js`);
const login = document.querySelector(`.login`);
const loginClose = document.querySelector(`.login__close`);

const loginToggleClickHandler = (evt) => {
  evt.preventDefault();
  body.classList.toggle(`modalfull-body--opened-modal`);
  login?.classList.toggle(`login--opened`);
};

const loginEscKeydownHandler = (evt) => {
  if (evt.key === `Escape`) {
    loginToggleClickHandler(evt);
  }
}

const loginLinkClickHandler = (evt) => {
  loginToggleClickHandler(evt);
  document.addEventListener(`keydown`, loginEscKeydownHandler);
};

const loginCloseClickHandler = (evt) => {
  loginToggleClickHandler(evt);
  document.removeEventListener(`keydown`, loginEscKeydownHandler);
};

loginLink?.addEventListener(`click`, loginLinkClickHandler);
loginClose?.addEventListener(`click`, loginCloseClickHandler);

})();
