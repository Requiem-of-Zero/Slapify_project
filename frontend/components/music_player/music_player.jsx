import React from 'react';
import Control from './control'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'paused',
      currentSong: this.props.song
    }
    console.log(props);
    this.playMusic = this.playMusic.bind(this)
  }
  
  handleScrub(e) {
    e.preventDefault();
    this.audio.currentTime = e.target.value
  }

  handleVolume(e) {
    e.preventDefault();
    this.audio.volume = e.target.value
  }

  toggleLoop() {
    const audio = document.getElementById('audio')
    console.log(audio.loop);
    return audio.loop === false ? audio.loop = true : audio.loop = false
  }

  toggleMute() {
    const audio = document.getElementById('audio')
    if(audio.muted === true) {
      audio.muted = false
      this.volume.value = 0.5
    } else {
      audio.muted = true
      this.volume.value = 0
    }
  }

  playMusic() {
    let songState = this.state.status;

    const audio = document.getElementById('audio')
    if(songState === 'playing') {
      songState = 'paused'; 
      audio.pause();
    } else {
      songState = 'playing'; 
      audio.play();
      this.interval = setInterval(() => {
        this.scrub.value = this.audio.currentTime
      }, 1000)
    }
    this.setState({ status: songState, currentSong: this.props.song })
  }

  render() {
    const { song } = this.props;
    
    return song ? (
      <div className='music_player-wrapper'>
        <audio
            ref={(audio) => {
                this.audio = audio;
            }}
          src={song.url}
            id="audio"
        />
        <div className="track-details">
          <p>{this.state.currentSong.songName}</p>
        </div>
        <div className="controls-seeker">
          <div className="control-btns">
            <FontAwesomeIcon icon="faPlay" />
            <i className="fa fa-pause" aria-hidden="true"></i>
            <button onClick={this.playMusic}>Play</button>
            <button onClick={this.toggleLoop}>Loop</button>
          </div>
          <div className="seeker">
            {/* <p>{this.audio.currentTime}</p> */}
            <input
                ref={(scrub) => {
                    this.scrub = scrub;
                }}
                type="range"
                min="0"
                max={song.duration}
                onChange={this.handleScrub.bind(this)}
            />
            {/* <p>{this.audio.duration}</p> */}
          </div>
        </div>
        <div className="volume-ctrl">
          <button onClick={this.toggleMute}>Mute</button>
          <input
              ref={(volume) => {
                  this.volume = volume;
              }}
              type="range"
              min="0"
              max="1"
              step="0.02"
              onChange={this.handleVolume.bind(this)}
          />
        </div>
      </div>
    ) : null;
  }
}

export default MusicPlayer;