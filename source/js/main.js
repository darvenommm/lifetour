import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import './utils/scroll-lock';

import {activateBurger, getHeaderAfterInnerChanging, getHeaderAfterWindowResizeChanging} from './modules/header/burger';
import {initHeroSlider} from './modules/hero/slider';
import {addHeroVideoHandlers} from './modules/hero/video';
import {addAudioHandlers} from './modules/hero/audio';
import {initToursSlider} from './modules/tours/init-tours-slider';
import {initLearningSlider} from './modules/learning/init-learning-slider';
import {initReviewsSlider} from './modules/reviews/init-reviews-slider';
import {initBenefitsSlider} from './modules/benefits/init-benefits-slider';
import {initGallerySlider} from './modules/gallery/init-gallery-slider';
import {initContactsMap} from './modules/contacts/init-contacts-map';
import {changeHeroTop} from './modules/hero/hero-style';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    activateBurger();
    getHeaderAfterInnerChanging((header) => {
      changeHeroTop(header.offsetHeight);
    });
    getHeaderAfterWindowResizeChanging((header) => {
      changeHeroTop(header.offsetHeight);
    });

    initHeroSlider();
    addHeroVideoHandlers();
    addAudioHandlers();

    initToursSlider();

    initLearningSlider();

    initReviewsSlider();

    initBenefitsSlider();

    initGallerySlider();

    initContactsMap();

    const form = new Form();
    window.form = form;
    form.init();
  });
});
