import Swiper from '../../vendor/swiper';

import {isMobile} from '../../utils/is-mobile';

export const initBenefitsSlider = () => {
  const SLIDER_SELECTOR = '.benefits__slider';
  const PREV_BUTTON_SELECTOR = '.benefits__prev';
  const NEXT_BUTTON_SELECTOR = '.benefits__next';

  const slider = new Swiper(SLIDER_SELECTOR, {
    allowTouchMove: isMobile(),
    speed: 300,
    spaceBetween: 30,
    watchOverflow: true,
    slidesPerView: 5,
    loop: true,

    navigation: {
      prevEl: PREV_BUTTON_SELECTOR,
      nextEl: NEXT_BUTTON_SELECTOR,
    },
  });

  return slider;
};
