export const addAudioHandlers = () => {
  const PARENT_SELECTOR = '.audio';
  const BUTTON_SELECTOR = '.audio__play';
  const PARENT_ACTIVE_CLASS = 'audio--active';
  const AUDIO_PLAYER = `
    <iframe
      frameborder="0"
      style="border:none;width:340px;height:220px;"
      width="340"
      height="220"
      src="https://music.yandex.ru/iframe/#track/112912322/25474374"
    >
      Слушайте <a href='https://music.yandex.ru/album/25474374/track/112912322'>
      001. Конец фронтенда, одинаковые фреймворки и логические свойства</a>
      на Яндекс Музыке
    </iframe>
  `;

  const parent = document.querySelector(PARENT_SELECTOR);
  const button = parent ? parent.querySelector(BUTTON_SELECTOR) : null;

  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    parent.replaceChildren();
    parent.classList.add(PARENT_ACTIVE_CLASS);
    parent.innerHTML = AUDIO_PLAYER;

    // const iframe = parent.querySelector('iframe');
    // iframe.addEventListener('load', () => {
    //   console.log(iframe.contentWindow.contentDocument);
    // });
  }, {once: true});
};
