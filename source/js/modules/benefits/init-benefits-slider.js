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

export const initBenefitsSlider = () => {
  const firstBreakpoint = window.matchMedia(`(min-width: ${config.tabletWidth}px)`);
  const secondBreakpoint = window.matchMedia('(min-width: 2000px)');
  const isValid = () => firstBreakpoint.matches && !secondBreakpoint.matches;

  let slider = null;

  if (isValid()) {
    slider = createSlider();
  }

  window.addEventListener('resize', () => {
    if (isValid()) {
      slider = createSlider();
    } else {
      if (slider) {
        slider.destroy();
        slider = null;
      }
    }
  });
};
