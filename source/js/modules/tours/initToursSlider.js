import Swiper from '../../vendor/swiper';

import {isMobile} from '../../utils/is-mobile';

export const initToursSlider = () => {
  const SLIDER_SELECTOR = '.tours__slider';
  const PREV_BUTTON_SELECTOR = '.tours__prev';
  const NEXT_BUTTON_SELECTOR = '.tours__next';

  const slider = new Swiper(SLIDER_SELECTOR, {
    allowTouchMove: isMobile(),
    speed: 300,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      prevEl: PREV_BUTTON_SELECTOR,
      nextEl: NEXT_BUTTON_SELECTOR,
    },
  });

  return slider;
};
