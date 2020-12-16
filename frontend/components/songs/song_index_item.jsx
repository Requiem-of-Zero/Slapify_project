import React from 'react';
import { FaPlay } from 'react-icons/fa';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    const audio = document.getElementById('audio')
    const { song } = this.props;
    this.props.updateCurrentSong(song)
    audio.play()
  }
  render() {
    const { song, id } = this.props;
    const { hover } = this.state;
    return (
      <li className='indiv-songs'
          onMouseEnter={() => this.setState({hover: 'hovering'})}
          onMouseLeave={() => this.setState({hover: ''})}>
        
        <div className="song-details-wrapper" >
          <div className="song-info">
            <a onClick={() => this.props.updateCurrentSong(song)} 
              className={hover} >
              {this.state.hover === 'hovering' ? <FaPlay/> : id+1}
            </a>
            <div className="song-title">
              {song.songName}
            </div>
          </div>
          <div className="song-duration">
            <p>3:00</p>
          </div>
        </div>
      </li>
    )
  }
}

export default SongIndexItem;