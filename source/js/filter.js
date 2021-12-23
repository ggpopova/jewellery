"use strict";
(() => {
// Filter behaviour

const body = document.body;
const filterButton = document.querySelector(`.filter__btn--open`);
const filterClose = document.querySelector(`.filter__close`);
const filter = document.querySelector(`.filter`);
const filterWrapper = document.querySelector(`.filter__container`);

const filterToogleClickhandler = (evt) => {
  evt.preventDefault();
  body.classList.toggle(`modalfull-body--opened`);
  filter?.classList.toggle(`filter--opened`);
};

const filterEscKeydownHandler = (evt) => {
  if (evt.key === `Escape`) {
    filterToogleClickhandler(evt);
  }
};

const filterButtonClickhandler = (evt) => {
  filterToogleClickhandler(evt);
  document.addEventListener(`keydown`, filterEscKeydownHandler);
  filterWrapper.addEventListener(`click`, filterWrapperClickHandler);
};

const filterCloseClickhandler = (evt) => {
  filterToogleClickhandler(evt);
  document.removeEventListener(`keydown`, filterEscKeydownHandler);
  filterWrapper.removeEventListener(`click`, filterWrapperClickHandler);
};

const filterWrapperClickHandler = (evt) => {
  if (evt.target === filterWrapper) {
    filterCloseClickhandler(evt);
  }
};

filterButton?.addEventListener(`click`, filterButtonClickhandler);
filterClose?.addEventListener(`click`, filterCloseClickhandler);

})();
