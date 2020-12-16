import React from 'react';
import Control from './control'
import { FaPause, FaPlay } from 'react-icons/fa'
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai'
import { TiArrowRepeat} from 'react-icons/ti'
import { BsShuffle, BsVolumeMute} from 'react-icons/bs'
import { FiVolume2 } from 'react-icons/fi'


class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'paused',
      currentSong: this.props.song,
      loop: '',
      mute: '',
    }

    this.toggleLoop = this.toggleLoop.bind(this)
    this.toggleMute = this.toggleMute.bind(this)
    this.playMusic = this.playMusic.bind(this)
  }
  
  handleScrub(e) {
    this.audio.currentTime = e.target.value
  }

  handleVolume(e) {
    this.audio.volume = e.target.value
  }

  toggleLoop() {
    const audio = document.getElementById('audio')
    console.log(audio.loop);
    if(audio.loop === true) {
      audio.loop = false
      this.setState({mute: ''})
    } else {
      audio.loop = true
      this.setState({mute: 'loop'})
    }
  }

  toggleMute() {
    const audio = document.getElementById('audio')
    console.log(audio.muted);
    if(audio.muted === true) {
      audio.muted = false
      this.setState({mute: ''})
    } else {
      audio.muted = true
      this.setState({mute: 'muted'})
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
      }, 2000)
    }
    this.setState({ status: songState, currentSong: this.props.song })
  }

  render() {
    const { song, album } = this.props;
    // debugger
    return song ? (
      <div className='music_player-wrapper'>
        <audio 
            ref={(audio) => {
                this.audio = audio;
            }}
          src={song.url}
            id="audio"
        />
        <div className="details-wrapper">
          <div className="cover">
            { album ? <img src={album.imgUrl} className="current-cover"/> : null }
          </div>
          <div className="track-details">
            <p>{song.songName}</p>
          </div>
        </div>
        <div className="controls-seeker">
          <div className="control-btns">
            <a className="btn ctrl-btns"><BsShuffle /></a>
            <a className="btn ctrl-btns"><AiFillStepBackward /></a>
            <a onClick={this.playMusic} className="btn play-btn">
              {this.state.status === 'paused' ? <FaPlay /> : <FaPause />}</a>
            <a className={this.state.loop}>
              <AiFillStepForward />
            </a>
            <a className="btn ctrl-btns" onClick={this.toggleLoop}>
              <TiArrowRepeat />
            </a>
          </div>
          <div className="seeker bars">
            {/* <p>{this.audio.currentTime}</p> */}
            <input
                ref={(scrub) => {
                    this.scrub = scrub;
                }}
                type="range"
                min="0"
                max={song.duration}
                onChange={this.handleScrub.bind(this)}
                className='bars'
            />
            {/* <p>{this.audio.duration}</p> */}
          </div>
        </div>
        <div className="volume-ctrl bars">
          <a onClick={this.toggleMute} className="ctrl-btns">
            {this.state.mute === 'muted' ? <BsVolumeMute/> : <FiVolume2/>}
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
          />
        </div>
      </div>
    ) : null;
  }
}

export default MusicPlayer;