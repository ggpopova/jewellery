"use strict";
(() => {
// Menu behaviour

const body = document.body;
const burgerButton = document.querySelector(`.burger-btn`);
const headerCover = document.querySelector(`.header-cover`);
const loginLinkMobile  = document.querySelector(`.expanded-nav-list__item--login a`);

const burgerButtonClickHandler = () => {
  headerCover?.classList.toggle(`header--opened`);
  body.classList.toggle(`modalfull-body--opened`);
};

const loginLinkMobileClickHandler = () => {
  burgerButtonClickHandler();
};

burgerButton?.addEventListener(`click`, burgerButtonClickHandler);
loginLinkMobile?.addEventListener(`click`, loginLinkMobileClickHandler);

})();
