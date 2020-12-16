import React, { Component } from 'react';
import LoggedInNav from '../splash_page/logged_in/logged_in_nav_bar';
import MusicPlayerContainer from '../music_player/music_player_container';
import { logout } from '../../actions/session_actions';
import SongIndexItem from '../songs/song_index_item';
import { BiTime } from 'react-icons/bi';

class AlbumShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.albumId)
  }

  render() {
    const { songs, updateCurrentSong, album } = this.props;
    return this.props.album ? (
      <div>
        <div className="album-show-wrapper">
          <div className="album-details">
            <img className="album" src={album.imgUrl}/>
            <div className="detail-content">
              <p>ALBUM</p>
              <h1>{album.albumName}</h1>
              <p>{album.year}, {songs.length} songs </p>
            </div>
          </div>
          <div className="album-content">
              <div className="song-labels">
                <div className="song-id">
                  <p>#</p>
                  <p>TITLE</p>
                </div>
                <div className="duration-label">
                  <p>
                    <BiTime />
                  </p>
                </div>
              </div>
              <ul className='album-show' >
                {songs.map((song, i) => <SongIndexItem song={song} updateCurrentSong={updateCurrentSong} id={i} />)}
              </ul>
            </div>
          </div>
      </div>
    ) : null;
  }
}

export default AlbumShow;