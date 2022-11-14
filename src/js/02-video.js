import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

returnCurrentTime();

player.on(`timeupdate`, throttle(showCurrentTime, 1500));

function showCurrentTime(data) {
  console.log(data);
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

function returnCurrentTime() {
  const timeToPlay = localStorage.getItem(STORAGE_KEY);
  if (timeToPlay) {
    player.setCurrentTime(timeToPlay);
  }
}
