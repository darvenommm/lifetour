import Swiper from '../../vendor/swiper';

import {isMobile} from '../../utils/is-mobile';

export const initLearningSlider = () => {
  const SLIDER_SELECTOR = '.learning__slider';
  const PREV_BUTTON_SELECTOR = '.learning__prev';
  const NEXT_BUTTON_SELECTOR = '.learning__next';

  const slider = new Swiper(SLIDER_SELECTOR, {
    allowTouchMove: isMobile(),
    speed: 300,
    spaceBetween: 30,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },

    navigation: {
      prevEl: PREV_BUTTON_SELECTOR,
      nextEl: NEXT_BUTTON_SELECTOR,
    },
  });

  return slider;
};
