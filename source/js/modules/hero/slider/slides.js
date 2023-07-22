const HERO_SELECTOR = '.hero';

const hero = document.querySelector(HERO_SELECTOR);

const classBySlide = [
  'hero--first-slide',
  'hero--second-slide',
  'hero--third-slide'
];

const deleteAllClasses = () => {
  classBySlide.forEach((className) => {
    hero.classList.remove(className);
  });
};

const setNewSliderBackground = (index) => {
  deleteAllClasses();
  hero.classList.add(classBySlide[index]);
};

export const changeSliderBackground = (index) => {
  if (!hero) {
    return;
  }

  setNewSliderBackground(index);
};

export const disableActiveElementsOutSlide = (slides, index) => {
  slides.forEach((slide, slideIndex) => {
    const activeElements = slide.querySelectorAll('button, a');

    activeElements.forEach((element) => {
      element.tabIndex = slideIndex === index ? '0' : '-1';
    });
  });
};
