"use strict";

document.querySelector(`.burger-btn`).addEventListener(`click`, () => {
  document.querySelector(`.header-cover`).classList.toggle(`header--opened`)
})

// Фильтр

// document.querySelector(`.filter-btn__open`).addEventListener(`click`, () => {
//   document.querySelector(`.catalog-wrap`).classList.toggle(`filter--opened`)
// })

// document.querySelector(`.filter__close`).addEventListener(`click`, () => {
//   document.querySelector(`.catalog-wrap`).classList.toggle(`filter--close`)
// })
