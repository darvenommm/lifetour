const PAGINATION_CONTAINER_SELECTOR = '.hero__paginations';
const BULLET_CONTAINER_CLASS = 'hero__pagination-item';
const BULLET_ACTIVE_CLASS = 'hero__pagination--active';
const BULLET_CLASS = 'hero__pagination';

const createBullet = ({isActive, index, buttonClickHandler}) => {
  const container = document.createElement('li');
  container.classList.add(BULLET_CONTAINER_CLASS);

  const button = document.createElement('button');
  button.classList.add(BULLET_CLASS, isActive ? BULLET_ACTIVE_CLASS : null);
  button.ariaLabel = `Нажми, чтобы перейти на ${index} слайд.`;
  button.type = 'button';

  button.addEventListener('click', () => {
    buttonClickHandler(index);
  });

  container.appendChild(button);

  return container;
};

export const renderNewBullets = ({index, total, buttonClickHandler}) => {
  const pagination = document.querySelector(PAGINATION_CONTAINER_SELECTOR);

  if (!pagination) {
    return;
  }

  pagination.replaceChildren();

  for (let i = 0; i < total; ++i) {
    const bullet = createBullet({
      index: i,
      isActive: i === index,
      buttonClickHandler,
    });

    pagination.appendChild(bullet);
  }
};
