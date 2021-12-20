"use strict";

// Menu behaviour

const body = document.body;
const burgerButton = document.querySelector(`.burger-btn`);
const headerCover = document.querySelector(`.header-cover`);

const burgerButtonClickHandler = () => {
  headerCover?.classList.toggle(`header--opened`);
  body.classList.toggle(`modalfull-body--opened`);
};

burgerButton?.addEventListener(`click`, burgerButtonClickHandler);
