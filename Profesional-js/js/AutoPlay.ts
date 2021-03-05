import MediaPlayer from './MediaPlayer'

class  Autoplay{

  run(player:MediaPlayer){

    if(!player.video.muted){
    player.video.muted = true;
    } 
    player.play();
  }
}

export default Autoplay;