import {config} from '../../config/config';

const PARENT_ID = 'hero__youtube-player';
const BUTTON_SELECTOR = 'button';

const DESKTOP_WIDTH = 482;
const TABLET_WIDTH = 442;
const DESKTOP_HEIGHT = 317;
const TABLET_HEIGHT = 300;

const DEFAULT_VIDEO_ID = '9TZXsZItgdw';
const YOUTUBE_API_LINK = 'https://www.youtube.com/iframe_api';

const parent = document.getElementById(PARENT_ID);
const button = parent ? parent.querySelector(BUTTON_SELECTOR) : null;

const customVideoId = parent ? parent.dataset.videoID : null;

let player;

const isDesktop = () => {
  const breakpoint = window.matchMedia(`(min-width: ${config.tabletWidth}px)`);
  return breakpoint.matches;
};

const downloadYoutubePlayer = (callback) => {
  const tag = document.createElement('script');
  tag.src = YOUTUBE_API_LINK;
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  tag.addEventListener('load', () => {
    window.YT.ready(callback);
  });
};

const createPlayer = () => {
  return new window.YT.Player(PARENT_ID, {
    width: isDesktop() ? DESKTOP_WIDTH : TABLET_WIDTH,
    height: isDesktop() ? DESKTOP_HEIGHT : TABLET_HEIGHT,
    videoId: customVideoId ? customVideoId : DEFAULT_VIDEO_ID,
    events: {
      onReady: (event) => {
        event.target.playVideo();
      },
    },
  });
};

export const addHeroVideoHandlers = () => {
  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    if (player) {
      return;
    }

    downloadYoutubePlayer(() => {
      player = createPlayer();
    });
  }, {once: true});
};

export const stopVideo = () => {
  if (player) {
    player.stopVideo();
  }
};
