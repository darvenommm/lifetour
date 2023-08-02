import Slider from '../../../vendor/swiper';
import {isMobile} from '../../../utils/is-mobile';

import {changeSliderBackground} from './slides';
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
    watchOverflow: true,

    on: {
      init: (swiper) => {
        renderBullets(swiper);
      },
      slideChange: (swiper) => {
        changeSliderBackground(swiper.activeIndex);
        renderBullets(swiper);
      },
    },
  });

  return slider;
}
