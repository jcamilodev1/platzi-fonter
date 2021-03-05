
class MediaPlayer {
  video: HTMLVideoElement
  plugins: Array<any>
  container:HTMLElement
  constructor(video){
    this.video = video.mi;
    this.plugins = video.plugins || [];
    this.initPlayer();
    this.initPlugings();
  }

  initPlayer(){
    this.container = document.createElement('div')
    this.container.style.position = 'relative';
    this.video.parentNode.insertBefore(this.container, this.video)
    this.container.appendChild(this.video)
  }
  private initPlugings(){
    
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play () {
      this.video.play();
  }
  pause(){
    this.video.pause();
  }
  mute(){
    this.video.muted =  true;
  }
  unmute(){
    this.video.muted = false;
  }
  muteUnmute(){
    if( this.video.muted ){
      this.unmute()
    }else{
      this.mute()
    }
  }
}

export default MediaPlayer;