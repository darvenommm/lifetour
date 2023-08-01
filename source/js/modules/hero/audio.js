export const addAudioHandlers = () => {
  const PARENT_SELECTOR = '.hero__audio';
  const AUDIO_PLAYER = `
    <iframe
      frameborder="0"
      style="border:none;width:340px;height:220px;"
      width="100%"
      height="220"
      src="https://music.yandex.ru/iframe/#track/112912322/25474374"
      title="Аудиоплеер"
    >
      Слушайте <a href='https://music.yandex.ru/album/25474374/track/112912322'>
      001. Конец фронтенда, одинаковые фреймворки и логические свойства</a>
      на Яндекс Музыке
    </iframe>
  `;

  const parent = document.querySelector(PARENT_SELECTOR);

  if (!parent) {
    return;
  }

  parent.replaceChildren();
  parent.innerHTML = AUDIO_PLAYER;
};
