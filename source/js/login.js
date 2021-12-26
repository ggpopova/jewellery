"use strict";
(() => {
// Login handler

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

const loginEscKeydownHandler = (evt) => {
  if (evt.key === `Escape`) {
    loginToggleClickHandler(evt);
  }
};

const loginLinkClickHandler = (evt) => {
  loginToggleClickHandler(evt);
  document.addEventListener(`keydown`, loginEscKeydownHandler);
};

const loginLinkMobileClickHandler = (evt) => {
  loginToggleClickHandler(evt);
  document.addEventListener(`keydown`, loginEscKeydownHandler);
};

const loginCloseClickHandler = (evt) => {
  loginToggleClickHandler(evt);
  document.removeEventListener(`keydown`, loginEscKeydownHandler);
};

const loginClickHandler = (evt) => {
  if (evt.target === login) {
    loginCloseClickHandler(evt);
  }
};

loginLink?.addEventListener(`click`, loginLinkClickHandler);
loginLinkMobile?.addEventListener(`click`, loginLinkMobileClickHandler);
login?.addEventListener(`click`, loginClickHandler);
loginClose?.addEventListener(`click`, loginCloseClickHandler);

})();
