import Slider from '../../../vendor/swiper';
import {isMobile} from '../../../utils/is-mobile';

import {changeSliderBackground, disableActiveElementsOutSlide} from './slides';
import {renderNewBullets} from './pagination';

export function initHeroSlider() {
  const SLIDER_SELECTOR = '.hero__container';

  const renderBullets = (swiper) => {
    renderNewBullets({
      index: swiper.activeIndex,
      total: swiper.slides.length,
      buttonClickHandler: (index) => {
        swiper.slideTo(index);
      },
    });
  };

  const slider = new Slider(SLIDER_SELECTOR, {
    spaceBetween: 50,
    speed: 300,
    allowTouchMove: isMobile(),

    on: {
      init: (swiper) => {
        renderBullets(swiper);
        disableActiveElementsOutSlide(swiper.slides, swiper.activeIndex);
      },
      slideChange: (swiper) => {
        changeSliderBackground(swiper.activeIndex);
        disableActiveElementsOutSlide(swiper.slides, swiper.activeIndex);
        renderBullets(swiper);
      },
    },
  });

  return slider;
}
