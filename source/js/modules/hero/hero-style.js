const HERO_SELECTOR = '.hero';

const hero = document.querySelector(HERO_SELECTOR);

export const changeHeroTop = (newTop) => {
  if (!hero) {
    return;
  }

  hero.style.marginTop = `${-newTop}px`;
  hero.style.paddingTop = `${newTop}px`;
};
