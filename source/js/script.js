"use strict";

// Menu behaviour

const burgerButton = document.querySelector(`.burger-btn`);
const headerCover = document.querySelector(`.header-cover`);

const burgerButtonClickHandler = () => {
  headerCover?.classList.toggle(`header--opened`);
};

burgerButton?.addEventListener(`click`, burgerButtonClickHandler);

// Filter behaviour

const filterButton = document.querySelector(`.filter-btn__open`);
const filterClose = document.querySelector(`.filter__close`);
const catalogWrap = document.querySelector(`.catalog-wrap`);

const filterButtonClickhandler = () => {
  catalogWrap?.classList.toggle(`filter--opened`);
};

filterButton?.addEventListener(`click`, filterButtonClickhandler);

filterClose?.addEventListener(`click`, filterButtonClickhandler);

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

// Slider handler

const DEFAULT_SLIDER_PAGE = 1;
const DESKTOP_SLIDES_PER_PAGE = 4;
const TABLET_SLIDES_PER_PAGE = 2;

const sliderItems = document.querySelectorAll(`.slider__item`);
const sliderButtonBwrd = document.querySelector(`.slider__button--bwrd`);
const sliderButtonFwrd = document.querySelector(`.slider__button--frwd`);

const overallDesktopSliderPages = sliderItems.length / DESKTOP_SLIDES_PER_PAGE;
const overallTabletSliderPages = sliderItems.length / TABLET_SLIDES_PER_PAGE;

let currentDesktopSliderPage = DEFAULT_SLIDER_PAGE;
let currentTabletSliderPage = DEFAULT_SLIDER_PAGE;

const sliderButtonBwrdClickHandler = () => {
    if (window.innerWidth > 768) {
        if (currentDesktopSliderPage === DEFAULT_SLIDER_PAGE) {
            currentDesktopSliderPage = overallDesktopSliderPages;
        } else {
            currentDesktopSliderPage = currentDesktopSliderPage - 1;
        }
    } else {
        if (currentTabletSliderPage === DEFAULT_SLIDER_PAGE) {
            currentTabletSliderPage = overallTabletSliderPages;
        } else {
            currentTabletSliderPage = currentTabletSliderPage - 1;
        }
    }

    const lastDesktopSlideShown = currentDesktopSliderPage * DESKTOP_SLIDES_PER_PAGE;
    const firstDesktopSlideShown = lastDesktopSlideShown - DESKTOP_SLIDES_PER_PAGE;

    const lastTabletSlideShown = currentTabletSliderPage * TABLET_SLIDES_PER_PAGE;
    const firstTabletSlideShown = lastTabletSlideShown - TABLET_SLIDES_PER_PAGE;

    sliderItems.forEach((slide, slideIndex) => {
        if (window.innerWidth > 768) {
            if (slideIndex >= firstDesktopSlideShown && slideIndex <= lastDesktopSlideShown - 1) {
                slide.classList.remove(`slider__item--hidden`);
            } else {
                slide.classList.add(`slider__item--hidden`);
            }
        } else {
            if (slideIndex >= firstTabletSlideShown && slideIndex <= lastTabletSlideShown - 1) {
                slide.classList.remove(`slider__item--hidden`);
            } else {
                slide.classList.add(`slider__item--hidden`);
            }
        }
    });
};

const sliderButtonFwrdClickHandler = () => {

    if (window.innerWidth > 768) {
        if (currentDesktopSliderPage === overallDesktopSliderPages) {
            currentDesktopSliderPage = DEFAULT_SLIDER_PAGE;
        } else {
            currentDesktopSliderPage = currentDesktopSliderPage + 1;
        }
    } else {
        if (currentTabletSliderPage === overallTabletSliderPages) {
            currentTabletSliderPage = DEFAULT_SLIDER_PAGE;
        } else {
            currentTabletSliderPage = currentTabletSliderPage + 1;
        }
    }

    const lastDesktopSlideShown = currentDesktopSliderPage * DESKTOP_SLIDES_PER_PAGE;
    const firstDesktopSlideShown = lastDesktopSlideShown - DESKTOP_SLIDES_PER_PAGE;

    const lastTabletSlideShown = currentTabletSliderPage * TABLET_SLIDES_PER_PAGE;
    const firstTabletSlideShown = lastTabletSlideShown - TABLET_SLIDES_PER_PAGE;

    sliderItems.forEach((slide, slideIndex) => {
        if (window.innerWidth > 768) {
            if (slideIndex >= firstDesktopSlideShown && slideIndex <= lastDesktopSlideShown - 1) {
                slide.classList.remove(`slider__item--hidden`);
            } else {
                slide.classList.add(`slider__item--hidden`);
            }
        } else {
            if (slideIndex >= firstTabletSlideShown && slideIndex <= lastTabletSlideShown - 1) {
                slide.classList.remove(`slider__item--hidden`);
            } else {
                slide.classList.add(`slider__item--hidden`);
            }
        }
    });
};

sliderButtonBwrd?.addEventListener(`click`, sliderButtonBwrdClickHandler);

sliderButtonFwrd?.addEventListener(`click`, sliderButtonFwrdClickHandler);

// Login handler

const body = document.body;
const loginLink = document.querySelector(`.login-link-js`);
const login = document.querySelector(`.login`);
const loginClose = document.querySelector(`.login__close`);

const loginToggleClickHandler = (evt) => {
  evt.preventDefault();
  body.classList.toggle(`modalfull-body--opened-modal`);
  login?.classList.toggle(`login--opened`);
};

const documentEscKeydownHandler = (evt) => {
  if (evt.key === `Escape`) {
    loginToggleClickHandler(evt);
  }
}

const loginLinkClickHandler = (evt) => {
  loginToggleClickHandler(evt);
  document.addEventListener(`keydown`, documentEscKeydownHandler);
};

const loginCloseClickHandler = (evt) => {
  loginToggleClickHandler(evt);
  document.removeEventListener(`keydown`, documentEscKeydownHandler);
};

loginLink?.addEventListener(`click`, loginLinkClickHandler);
loginClose?.addEventListener(`click`, loginCloseClickHandler);

