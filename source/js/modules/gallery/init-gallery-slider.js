import Swiper from '../../vendor/swiper';

import {isMobile} from '../../utils/is-mobile';

export const initGallerySlider = () => {
  const SLIDER_SELECTOR = '.gallery__slider';
  const PREV_BUTTON_SELECTOR = '.gallery__prev';
  const NEXT_BUTTON_SELECTOR = '.gallery__next';

  const slider = new Swiper(SLIDER_SELECTOR, {
    allowTouchMove: isMobile(),
    speed: 300,
    watchOverflow: true,
    slidesPerView: 'auto',

    navigation: {
      prevEl: PREV_BUTTON_SELECTOR,
      nextEl: NEXT_BUTTON_SELECTOR,
    },
  });

  return slider;
};
