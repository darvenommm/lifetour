import Swiper from '../../vendor/swiper';

import {isMobile} from '../../utils/is-mobile';

export const initReviewsSlider = () => {
  const SLIDER_SELECTOR = '.reviews__container';
  const SLIDER_PREV_SELECTOR = '.reviews__prev';
  const SLIDER_NEXT_SELECTOR = '.reviews__next';

  const swiper = new Swiper(SLIDER_SELECTOR, {
    allowTouchMove: isMobile(),
    speed: 300,
    spaceBetween: 30,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1.2,
      },
      1200: {
        slidesPerView: 1.6,
      },
    },

    navigation: {
      prevEl: SLIDER_PREV_SELECTOR,
      nextEl: SLIDER_NEXT_SELECTOR,
    },
  });

  return swiper;
};
