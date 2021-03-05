import MediaPlayer from './MediaPlayer';
import AutoPlay from './AutoPlay'
import AutoPause from './AutoPause'
import Ads from './Ads/index'


const video = document.querySelector("video");
const button: HTMLElement = document.querySelector("button");
const unmute:HTMLElement = document.getElementById("unmute")

const inicio = new MediaPlayer({mi : video, plugins :[
  new AutoPlay(),
  new AutoPause(),
  new Ads(),
]});
button.onclick = () => {
  if(video.paused){
    video.play();
  }
  else{
    video.pause();
}
}
unmute.onclick= () => inicio.muteUnmute();
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error => {console.log(error.message)})
}