export const addHeroVideoHandlers = () => {
  const PARENT_SELECTOR = '.hero__video';
  const BUTTON_SELECTOR = 'button';

  const parent = document.querySelector(PARENT_SELECTOR);
  const button = parent.querySelector(BUTTON_SELECTOR);

  const src =
    (parent.dataset.src ? parent.dataset.src : 'https://www.youtube-nocookie.com/embed/9TZXsZItgdw')
    + '?&autoplay=1&rel=0';

  button.addEventListener('click', () => {
    parent.replaceChildren();

    parent.innerHTML = `
      <iframe width="560"
        height="315"
        src="${src}"
        title="YouTube video player"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share
        "
        allowfullscreen
      ></iframe>
    `;
  }, {once: true});
};
