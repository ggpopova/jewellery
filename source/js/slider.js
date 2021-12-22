"use strict";
(() => {
// Slider handler

const DEFAULT_SLIDER_PAGE = 1;
const DESKTOP_SLIDES_PER_PAGE = 4;
const TABLET_SLIDES_PER_PAGE = 2;

const slider = document.querySelector(`.slider`);
const sliderItems = slider?.querySelectorAll(`.slider__item`);
const sliderButtonBwrd = slider?.querySelector(`.slider__button--bwrd`);
const sliderButtonFwrd = slider?.querySelector(`.slider__button--frwd`);

const paginationDesktopList = document.querySelector(`.pagination__list--desk`);
const paginationDesktopLinks = document.querySelectorAll(`.pagination__list--desk a`);

const paginationTabletList = document.querySelector(`.pagination__list--tab`);
const paginationTabletLinks = document.querySelectorAll(`.pagination__list--tab a`);

const overallDesktopSliderPages = sliderItems?.length / DESKTOP_SLIDES_PER_PAGE;
const overallTabletSliderPages = sliderItems?.length / TABLET_SLIDES_PER_PAGE;

let currentDesktopSliderPage = DEFAULT_SLIDER_PAGE;
let currentTabletSliderPage = DEFAULT_SLIDER_PAGE;

const sliderButtonBwrdClickHandler = () => {
    if (window.innerWidth > 1024) {
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
        if (window.innerWidth > 1024) {
            if (slideIndex >= firstDesktopSlideShown && slideIndex <= lastDesktopSlideShown - 1) {
                slide.classList.remove(`slider__item--hidden`);
            } else {
                slide.classList.add(`slider__item--hidden`);
            }
            Array.from(paginationDesktopLinks).forEach(el => el.parentElement.classList.remove(`pagination__item--active`));
            Array.from(paginationDesktopLinks).find(el => Number(el.textContent) === currentDesktopSliderPage).parentElement.classList.add(`pagination__item--active`);
        } else {
            if (slideIndex >= firstTabletSlideShown && slideIndex <= lastTabletSlideShown - 1) {
                slide.classList.remove(`slider__item--hidden`);
            } else {
                slide.classList.add(`slider__item--hidden`);
            }
            Array.from(paginationTabletLinks).forEach(el => el.parentElement.classList.remove(`pagination__item--active`));
            Array.from(paginationTabletLinks).find(el => Number(el.textContent) === currentTabletSliderPage).parentElement.classList.add(`pagination__item--active`);
        }
    });
};

const sliderButtonFwrdClickHandler = () => {

    if (window.innerWidth > 1024) {
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
        if (window.innerWidth > 1024) {
            if (slideIndex >= firstDesktopSlideShown && slideIndex <= lastDesktopSlideShown - 1) {
                slide.classList.remove(`slider__item--hidden`);
            } else {
                slide.classList.add(`slider__item--hidden`);
            }
            Array.from(paginationDesktopLinks).forEach(el => el.parentElement.classList.remove(`pagination__item--active`));
            Array.from(paginationDesktopLinks).find(el => Number(el.textContent) === currentDesktopSliderPage).parentElement.classList.add(`pagination__item--active`);
        } else {
            if (slideIndex >= firstTabletSlideShown && slideIndex <= lastTabletSlideShown - 1) {
                slide.classList.remove(`slider__item--hidden`);
            } else {
                slide.classList.add(`slider__item--hidden`);
            }
            Array.from(paginationTabletLinks).forEach(el => el.parentElement.classList.remove(`pagination__item--active`));
            Array.from(paginationTabletLinks).find(el => Number(el.textContent) === currentTabletSliderPage).parentElement.classList.add(`pagination__item--active`);
        }
    });
};

sliderButtonBwrd?.addEventListener(`click`, sliderButtonBwrdClickHandler);

sliderButtonFwrd?.addEventListener(`click`, sliderButtonFwrdClickHandler);

// Pagination

paginationDesktopList?.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (Array.from(paginationDesktopLinks).includes(evt.target)) {
    currentDesktopSliderPage = Number(evt.target?.textContent);
    Array.from(paginationDesktopLinks).forEach(el => el.parentElement.classList.remove(`pagination__item--active`));
    Array.from(paginationDesktopLinks).find(el => Number(el.textContent) === currentDesktopSliderPage).parentElement.classList.add(`pagination__item--active`);

    const lastDesktopSlideShown = currentDesktopSliderPage * DESKTOP_SLIDES_PER_PAGE;
    const firstDesktopSlideShown = lastDesktopSlideShown - DESKTOP_SLIDES_PER_PAGE;

    sliderItems.forEach((slide, slideIndex) => {
      if (slideIndex >= firstDesktopSlideShown && slideIndex <= lastDesktopSlideShown - 1) {
          slide.classList.remove(`slider__item--hidden`);
      } else {
          slide.classList.add(`slider__item--hidden`);
      }
    });
  };
});

paginationTabletList?.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (Array.from(paginationTabletLinks).includes(evt.target)) {
    currentTabletSliderPage = Number(evt.target?.textContent);
    Array.from(paginationTabletLinks).forEach(el => el.parentElement.classList.remove(`pagination__item--active`));
    Array.from(paginationTabletLinks).find(el => Number(el.textContent) === currentTabletSliderPage).parentElement.classList.add(`pagination__item--active`);

    const lastTabletSlideShown = currentTabletSliderPage * TABLET_SLIDES_PER_PAGE;
    const firstTabletSlideShown = lastTabletSlideShown - TABLET_SLIDES_PER_PAGE;

    sliderItems.forEach((slide, slideIndex) => {
      if (slideIndex >= firstTabletSlideShown && slideIndex <= lastTabletSlideShown - 1) {
          slide.classList.remove(`slider__item--hidden`);
      } else {
          slide.classList.add(`slider__item--hidden`);
      }
    });
  };
});

const paginationMobileLink = document.querySelector(`.pagination__list--mob a`);

let xDown = null;
let xDiff = null;

const touchStartHandler = (evt) => {
  const firstTouch = evt.touches[0];
  xDown = firstTouch.clientX;
};

const touchMoveHandler = (evt) => {
  let xUp = evt.touches[0].clientX;

  xDiff = xDown - xUp;
};

const touchEndHandler = () => {
  if (xDiff > 0) {
    // right swipe
    sliderButtonFwrdClickHandler();
  } else {
    // left swipe
    sliderButtonBwrdClickHandler();
  }

  xDown = null;

  paginationMobileLink.textContent = currentTabletSliderPage;
};

slider?.addEventListener(`touchstart`, touchStartHandler);
slider?.addEventListener(`touchmove`, touchMoveHandler);
slider?.addEventListener(`touchend`, touchEndHandler);

const windowResizeHandler = () => {
  const lastDesktopSlideShown = currentDesktopSliderPage * DESKTOP_SLIDES_PER_PAGE;
  const firstDesktopSlideShown = lastDesktopSlideShown - DESKTOP_SLIDES_PER_PAGE;

  const lastTabletSlideShown = currentTabletSliderPage * TABLET_SLIDES_PER_PAGE;
  const firstTabletSlideShown = lastTabletSlideShown - TABLET_SLIDES_PER_PAGE;

  sliderItems.forEach((slide, slideIndex) => {
      if (window.innerWidth > 1024) {
          if (slideIndex >= firstDesktopSlideShown && slideIndex <= lastDesktopSlideShown - 1) {
              slide.classList.remove(`slider__item--hidden`);
          } else {
              slide.classList.add(`slider__item--hidden`);
          }
          Array.from(paginationDesktopLinks).forEach(el => el.parentElement.classList.remove(`pagination__item--active`));
          Array.from(paginationDesktopLinks).find(el => Number(el.textContent) === currentDesktopSliderPage).parentElement.classList.add(`pagination__item--active`);
      } else {
          if (slideIndex >= firstTabletSlideShown && slideIndex <= lastTabletSlideShown - 1) {
              slide.classList.remove(`slider__item--hidden`);
          } else {
              slide.classList.add(`slider__item--hidden`);
          }
          Array.from(paginationTabletLinks).forEach(el => el.parentElement.classList.remove(`pagination__item--active`));
          Array.from(paginationTabletLinks).find(el => Number(el.textContent) === currentTabletSliderPage).parentElement.classList.add(`pagination__item--active`);
      }
  });
};

window.addEventListener(`resize`, windowResizeHandler);

})();
