export const activateBurger = () => {
  const BURGER_ACTIVE = 'burgerActive';
  const SHOWED_LINK_CLASS = 'link--on-light';
  const BURGER_ARIA_LABEL_AFTER_OPENING = 'Нажми, чтобы закрыть меню.';
  const BURGER_ARIA_LABEL_AFTER_CLOSING = 'Нажми, чтобы открыть меню.';

  const header = document.querySelector('.header');
  const burger = header ? header.querySelector('.header__burger') : null;
  const links = header ? header.querySelectorAll('.header__link') : null;

  if (!burger) {
    return;
  }

  header.dataset[BURGER_ACTIVE] = false;
  burger.ariaLabel = BURGER_ARIA_LABEL_AFTER_CLOSING;

  burger.addEventListener('click', () => {
    if (header.dataset[BURGER_ACTIVE] === 'false') {
      header.dataset[BURGER_ACTIVE] = true;
      burger.ariaLabel = BURGER_ARIA_LABEL_AFTER_OPENING;

      links.forEach((link) => {
        link.classList.add(SHOWED_LINK_CLASS);
      });
    } else {
      header.dataset[BURGER_ACTIVE] = false;
      burger.ariaLabel = BURGER_ARIA_LABEL_AFTER_CLOSING;

      links.forEach((link) => {
        link.classList.remove(SHOWED_LINK_CLASS);
      });
    }
  });
};
