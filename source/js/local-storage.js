"use strict";
(() => {
// localStorage handler

const emailInput = document.querySelector(`#email`);
const loginForm = document.querySelector(`.login__form`);

const emailInputChangeHandler = () => {
  localStorage.setItem(`email`, emailInput.value);
};

if (localStorage.getItem(`email`) && emailInput) {
  emailInput.value = localStorage.getItem(`email`);
}

emailInput?.addEventListener(`change`, emailInputChangeHandler);

})();
