const BURGER_ACTIVE = 'burgerActive';
const SHOWED_LINK_CLASS = 'link--on-light';
const BURGER_ARIA_LABEL_AFTER_OPENING = 'Нажми, чтобы закрыть меню.';
const BURGER_ARIA_LABEL_AFTER_CLOSING = 'Нажми, чтобы открыть меню.';

const header = document.querySelector('.header');
const burger = header ? header.querySelector('.header__burger') : null;

export const activateBurger = () => {

  if (!burger) {
    return;
  }

  const headerOuterClickHandler = (event) => {
    const target = event.target;

    if (target === header) {
      closeHeader();
    }
  };

  const documentKeydownHandler = (event) => {
    if (event.key.toLowerCase().startsWith('esc')) {
      closeHeader();
    }
  };

  const getLinks = () => {
    return header ? header.querySelectorAll('.header__link') : [];
  };

  const closeHeader = () => {
    header.dataset[BURGER_ACTIVE] = false;
    burger.ariaLabel = BURGER_ARIA_LABEL_AFTER_CLOSING;
    window.scrollLock.enableScrolling();

    getLinks().forEach((link) => {
      link.classList.remove(SHOWED_LINK_CLASS);
      link.removeEventListener('click', closeHeader);
      document.removeEventListener('click', headerOuterClickHandler);
      document.removeEventListener('keydown', documentKeydownHandler);
    });
  };

  const openHeader = () => {
    header.dataset[BURGER_ACTIVE] = true;
    burger.ariaLabel = BURGER_ARIA_LABEL_AFTER_OPENING;
    window.scrollLock.disableScrolling();

    getLinks().forEach((link) => {
      link.classList.add(SHOWED_LINK_CLASS);
      link.addEventListener('click', closeHeader);
      document.addEventListener('click', headerOuterClickHandler);
      document.addEventListener('keydown', documentKeydownHandler);
    });
  };

  header.dataset[BURGER_ACTIVE] = false;
  burger.ariaLabel = BURGER_ARIA_LABEL_AFTER_CLOSING;

  burger.addEventListener('click', () => {
    (header.dataset[BURGER_ACTIVE] === 'false' ? openHeader : closeHeader)();
  });
};

export const getHeaderAfterInnerChanging = (callback) => {
  const observer = new MutationObserver((mutationRecords) => {
    callback(header, mutationRecords);
  });

  const observerOption = {
    childList: true,
    subtree: true,
  };

  if (header) {
    observer.observe(header, observerOption);
  }
};

export const getHeaderAfterWindowResizeChanging = (callback) => {
  window.addEventListener('resize', () => {
    callback(header);
  });
};
