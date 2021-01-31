import React from 'react';
import { connect } from 'react-redux'
import { FaPlay, FaPause } from 'react-icons/fa';
import { playSong, pauseSong, playIndivSong } from '../../actions/music_player_actions';

const mstp = state => ({
  currentSong: state.music.currentSong,
  playing: state.music.playing
});

const mdtp = dispatch => ({
  pause: () => dispatch(pauseSong()),
  play: () => dispatch(playSong()),
  playIndivSong: songId => dispatch(playIndivSong(songId))
})

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: '',
      hoveredSongId: null,
    }
  }

  componentDidMount() {
    this.props.handleQueue()
  }

  render() {
    const { song, id, playing, playIndivSong } = this.props;
    const { hover, hoveredSongId } = this.state;

    const playBtn = playing 
      ? <FaPause onClick={this.props.pause}/> 
      : <FaPlay onClick={() => playIndivSong(hoveredSongId)} />

    return (
      <li className='indiv-songs'
          onMouseEnter={() => {
            this.setState({hover: 'hovering', hoveredSongId: id})
            console.log(this.state.hoveredSongId)
          }}
          onMouseLeave={() => this.setState({hover: ''})}>
        
        <div className="song-details-wrapper" >
          <div className="song-info">
            <a  
              className={hover} >
              {this.state.hover === 'hovering' ? playBtn : id+1}
            </a>
            <div className="song-title">
              {song.songName}
            </div>
          </div>
          <div className="song-duration">
            <p>{song.duration}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default connect(mstp, mdtp)(SongIndexItem);