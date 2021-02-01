import React from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { TiArrowRepeat} from 'react-icons/ti';
import { BsShuffle, BsVolumeMute} from 'react-icons/bs';
import { FiVolume2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { selectSong } from '../../util/song_api_util';


class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: null,
      currentTime: null,
      remainingTime: null,
      seekerVal: null,
      mute: '',
    }
  }

  componentDidMount() {
    this.volume.value = 0.5;

  }
  

  // componentDidUpdate() {
  //   this.props.getArtist(this.props.album.artistId)
  // }

  componentDidUpdate(prevProps) {
    clearInterval(this.timeSetter);
    if(this.props.music.active) {
      if(this.props.currentSong !== prevProps.currentSong){
        this.audio.src = this.props.currentSong.url;
      }

      this.audio.onloadedmetadata = () => 
        this.setState({ duration: this.audio.duration })
    }

    if(this.props.music.playing) {
      this.audio.volume = this.volume.value;
      this.audio.play();
      this.handleInterval();
      if(this.props.queue[this.props.queue.length - 1].id !== this.props.currentSong.id){
        this.audio.onended = () => {
          this.handleSeek("next");
        };
      }
    } else {
      this.audio.pause()
    }
  }

  handleInterval(){
    this.timeSetter = setInterval(() => {
      this.scrub.value = this.state.currentTime;
      this.scrub.style.background = 'linear-gradient(to right, #1DB954 0%, #1DB954 ' 
        + ((this.scrub.value/this.scrub.max) * 100) 
        + '%, #4e4e4e ' 
        + ((this.scrub.value/this.scrub.max) * 100) 
        + '%, #4e4e4e 100%)'
      this.setState({
        currentTime: this.audio.currentTime,
        remainingTime: this.state.duration - this.audio.currentTime,
      })
    }, 250)
  }

  bufferNext() {
    const { music } = this.props;
    if(music.startIdx + 1 < music.queue.length) {
      new Audio(music.queue[music.startIdx + 1].url)
    }
  }

  
  handleTick() {
    // debugger
    this.interval = setInterval(() => {
        this.scrub.value = this.state.currentTime;
        this.scrub.style.background = 'linear-gradient(to right, #1DB954 0%, #1DB954 ' + ((this.scrub.value/this.scrub.max) * 100) + '%, #4e4e4e ' + ((this.scrub.value/this.scrub.max) * 100) + '%, #4e4e4e 100%)'
      }, 1000);
  }

  handleScrub(e) {
      this.audio.currentTime = e.target.value;
      e.target.style.background = 
      'linear-gradient(to right, #1DB954 0%, #1DB954 ' + 
      ((e.target.value/e.target.max) * 100) + '%, #4e4e4e ' + 
      ((e.target.value/e.target.max) * 100) + '%, #4e4e4e 100%)'
  }

  handleSeek(e) {
    const { music } = this.props
    if (this.state.currentTime > this.state.remainingTime){
      selectSong(this.props.currentSong.id)
    }

    if (music.queue.length === 1 && music.loop) {
      this.audio.currentTime = 0;
    } else {
      e === "next" ? this.props.nextSong() : this.props.prevSong()
    }

  }

  handleVolume(e) {
    // debugger
    this.audio.volume = (e.target.value/2)
    e.target.style.background = 
      'linear-gradient(to right, #1DB954 0%, #1DB954 ' + 
      (e.target.value*100) + '%, #4e4e4e ' + (e.target.value*100) + 
      '%, #4e4e4e 100%)'
  }

  toggleLoop() {
    this.props.loopSongs()
  }

  toggleShuffle() {
    this.props.shuffleSongs()
  }

  toggleMute() {
    const audio = document.getElementById('audio');
    const volume = document.getElementById('vol');
    if(audio.muted === true) {
      audio.muted = false
      volume.value = 0.1
      volume.style.background = 'linear-gradient(to right, #1DB954 0%, #1DB954 ' + volume.value*100 + '%, #4e4e4e ' + volume.value*100 + '%, #4e4e4e 100%)'
      this.setState({mute: ''})
    } else {
      audio.muted = true
      volume.value = 0
      volume.style.background = 'linear-gradient(to right, #1DB954 0%, #1DB954 ' + volume.value*100 + '%, #4e4e4e ' + volume.value*100 + '%, #4e4e4e 100%)'
      this.setState({mute: "mute"})
    }
  }

  //converts time to minutes:seconds
  convertTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60));
    if(seconds < 10 ) { seconds = '0' + seconds; };
    if(!minutes && !seconds) {
      time = '0 : 00';
    } else {
      time = `${minutes} : ${seconds}`;
    }
    return time;
  };

  render() {
    const { music, song, album, artist, currentSong, currentAlbum, currentArtist } = this.props;

    let songUrl,
        songName,
        albumId,
        albumName,
        artistId,
        artistName;

    let shuffActive = "",
        loopActive = "";
    if(music.shuffle) shuffActive = " active";
    if(music.loop) loopActive = " active"

    if(currentSong) {
      songUrl = currentSong.url;
      songName = currentSong.songName;
      albumId = currentAlbum.id;
      albumName = currentAlbum.albumName;
      artistId = currentArtist.id;
      artistName = currentArtist.name;
    }

    return (
      <div className='music_player-wrapper'>
        <audio 
            ref={(audio) => {
                this.audio = audio;
            }}
          src={songUrl}
            id="audio"
        />
        <div className="details-wrapper">
          <div className="cover">
            { currentAlbum ? <Link to={`/albums/${albumId}`}> <img src={currentAlbum.imgUrl} className="current-cover"/> </Link> : null }
          </div>
          <div className="track-details">
            <p>{songName}</p>
            <p>{artistName}</p>
          </div>
        </div>
        <div className="controls-seeker">

          <div className="control-btns">
            <BsShuffle 
              className="toggle-btn ctrl-btns" 
              onClick={() => this.toggleShuffle()}
            />
            <AiFillStepBackward 
              className="ctrl-btns" 
              onClick={() => this.handleSeek("prev")}
            />
            { music.playing ? <FaPause onClick={this.props.pauseSong} /> :  <FaPlay onClick={this.props.playSong} />}
            <AiFillStepForward 
              className="ctrl-btns" 
              onClick={() => this.handleSeek("next")}
            />
            <TiArrowRepeat 
              className={shuffActive} 
              onClick={() => this.toggleLoop()} 
            />
          </div>

          <div className="seeker bars">
            <p>{currentSong ? this.convertTime(this.audio.currentTime) : null}</p>
            <input
                ref={(scrub) => {
                    this.scrub = scrub;
                }}
                type="range"
                min="0"
                max={this.state.duration}
                onChange={this.handleScrub.bind(this)}
                className='bars'
                id='bars'
            />
            <p>{currentSong ? this.convertTime(this.audio.duration) : null}</p>
          </div>
        </div>
        <div className="volume-ctrl bars">
          <a onClick={() => this.toggleMute()} className="ctrl-btns">
            {this.state.mute === 'mute' ? <BsVolumeMute/> : <FiVolume2/>}
          </a>
          <input
              ref={(volume) => {
                  this.volume = volume;
              }}
              type="range"
              min="0"
              max="1"
              step="0.02"
              onChange={this.handleVolume.bind(this)}
              className="bars"
              id='vol'
          />
          {console.log(this.state.mute)}
        </div>
      </div>
    )
  }
}

export default MusicPlayer;