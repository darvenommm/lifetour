import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';

import {activateBurger} from './modules/header/burger';
import {initHeroSlider} from './modules/hero/slider';
import {addHeroVideoHandlers} from './modules/hero/video';
import {initToursSlider} from './modules/tours/init-tours-slider';
import {initLearningSlider} from './modules/learning/init-learning-slider';
import {initReviewsSlider} from './modules/reviews/init-reviews-slider';
import {initBenefitsSlider} from './modules/benefits/init-benefits-slider';

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

    initHeroSlider();
    addHeroVideoHandlers();

    initToursSlider();

    initLearningSlider();

    initReviewsSlider();

    if (window.matchMedia('(min-width: 1200px)').matches) {
      initBenefitsSlider();
    }

    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
