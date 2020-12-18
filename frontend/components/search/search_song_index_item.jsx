import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { Link } from 'react-router-dom';

class SearchSongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: '',
    }
  }

  render() {
    const { song, id, imgUrl, albumName, albumId, artists, album } = this.props;
    const { hover } = this.state;

    return (
      <div>
        <li className='indiv-songs'
            onMouseEnter={() => this.setState({hover: 'hovering'})}
            onMouseLeave={() => this.setState({hover: ''})}>
          
          <div className="search-details-wrapper" >
            <div className="song-info">
              <div className="song-desc">
              <a onClick={() => this.props.updateCurrentSong(song)} 
                className={hover} >
                {this.state.hover === 'hovering' ? <FaPlay/> : id+1}
              </a>
                <Link to={`/albums/${albumId}`}>
                  <img src={ imgUrl } width="50" height="50" className="search-photo"/>
                </Link>
                <div className="desc-inner">
                  <Link to={`/albums/${song.albumId}`}>
                    {albumName}
                  </Link>
                  <p>{song.songName}</p>
                </div>
              </div>
            </div>
            <div className="song-artist">
              <p>{(artists[album.artistId]).name}</p>
            </div>
            <div className="song-duration">
              <p>3:00</p>
            </div>
          </div>
        </li>
      </div>
    )
  }
}

export default SearchSongIndexItem;