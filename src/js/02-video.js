import Vimeo from '@vimeo/player';
const _ = require('lodash');
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const raw = localStorage.getItem('videoplayer-current-time')

if (raw) {
  const obj = JSON.parse(raw)
  player.setCurrentTime(obj.seconds).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':

            break;

        default:

            break;
    }
});
}


player.on('timeupdate', _.throttle(data => {
  const {seconds} = data 
  const time = {
    seconds
  }
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time))
}, 1000))