import Swiper from '../../vendor/swiper';

import {isMobile} from '../../utils/is-mobile';

const SLIDER_SELECTOR = '.benefits__slider';
const PREV_BUTTON_SELECTOR = '.benefits__prev';
const NEXT_BUTTON_SELECTOR = '.benefits__next';

// const createSlider = () => {

// };

// let currentSlider = null;
// const createSliderConsideringWindowWidth = () => {
//   createSlider();
//   const width = window.innerWidth;
//   console.log('start', currentSlider, width < config.tabletWidth)

//   if (width < config.tabletWidth) {
//     console.log('middle', currentSlider);
//     if (currentSlider) {
//       currentSlider.destroy(true, true);

//       // document
//       //     .querySelector(SLIDER_SELECTOR)
//       //     .querySelectorAll('.swiper-wrapper, swiper-slide')
//       //     .forEach((element) => element.setAttribute('style', ''));
//     }
//   } else {
//     currentSlider = createSlider();
//   }

//   console.log('end', currentSlider)
// };

export const initBenefitsSlider = () => {
  // createSliderConsideringWindowWidth();
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

  // window.addEventListener('resize', createSliderConsideringWindowWidth);
};
