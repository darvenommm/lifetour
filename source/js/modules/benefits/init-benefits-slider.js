import Swiper from '../../vendor/swiper';

import {isMobile} from '../../utils/is-mobile';
import {config} from '../../config/config';

const SLIDER_SELECTOR = '.benefits__slider';
const PREV_BUTTON_SELECTOR = '.benefits__prev';
const NEXT_BUTTON_SELECTOR = '.benefits__next';

const createSlider = () => {
  return new Swiper(SLIDER_SELECTOR, {
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
};

let slider = null;
export const initBenefitsSlider = () => {
  const breakpoint = window.matchMedia(`(min-width: ${config.tabletWidth}px)`);

  if (breakpoint.matches) {
    slider = createSlider();
  }

  window.addEventListener('resize', () => {
    if (breakpoint.matches) {
      slider = createSlider();
    } else {
      if (slider) {
        slider.destroy(true, true);
        slider = null;
      }
    }
  });
};
