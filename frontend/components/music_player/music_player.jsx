import React from 'react';
import Control from './control'

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'paused',
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

  playMusic() {
    let songState = this.state.status;

    const audio = document.getElementById('audio')
    if(songState === 'playing') {
      songState = 'paused'; 
      audio.pause();
    } else {
      songState = 'playing'; 
      audio.play();
    }
    this.setState({ status: songState })
  }

  render() {
    const { song } = this.props;
    return (
      <div className='music_player-wrapper'>
        <audio
            ref={(audio) => {
                this.audio = audio;
            }}
          src={song.url}
            id="audio"
        />
        <div className="track-details">
          <p>{song.songName}</p>
        </div>
        <div className="controls-seeker">
          <div className="control-btns">
            {/* <Control songState={this.state.status} playMusic={this.playMusic}/> */}
            <button onClick={this.playMusic}>Play</button>
            <button onClick={this.toggleLoop}>Loop</button>
          </div>
          <div className="seeker">
            <input
                ref={(scrub) => {
                    this.scrub = scrub;
                }}
                type="range"
                min="0"
                max={song.duration}
                onChange={this.handleScrub.bind(this)}
            />
          </div>
        </div>
        <div className="volume-ctrl">
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
    )
  }
}

export default MusicPlayer;