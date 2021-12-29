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
