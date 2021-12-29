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

"use strict";
(() => {
  // Filter behaviour

  const keyCodes = {
    ESCAPE: 27,
    TAB: 9
  };

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

  const filterButtonClickhandler = (evt) => {
    filterToogleClickhandler(evt);
    document.addEventListener(`keydown`, handlePopupKeydown);
    filterWrapper.addEventListener(`click`, filterWrapperClickHandler);
  };

  const filterCloseClickhandler = (evt) => {
    filterToogleClickhandler(evt);
    document.removeEventListener(`keydown`, handlePopupKeydown);
    filterWrapper.removeEventListener(`click`, filterWrapperClickHandler);
  };

  const filterWrapperClickHandler = (evt) => {
    if (evt.target === filterWrapper) {
      filterCloseClickhandler(evt);
    }
  };

  const handlePopupTabOrShiftAndTabKeydown = (evt) => {
    if (evt.keyCode === keyCodes.TAB) {
      const focusablePopupElements = filter.querySelectorAll(`a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select`);

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
    [keyCodes.ESCAPE, filterCloseClickhandler],
    [keyCodes.TAB, handlePopupTabOrShiftAndTabKeydown]
  ]);

  const handlePopupKeydown = (evt) => {
    const handlePopupKeydownProper = keydownHandlers.get(evt.keyCode);

    if (handlePopupKeydownProper) {
      handlePopupKeydownProper(evt);
    }
  };

  filterButton?.addEventListener(`click`, filterButtonClickhandler);
  filterClose?.addEventListener(`click`, filterCloseClickhandler);
})();

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

  sliderItems?.forEach((slide, slideIndex) => {
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
