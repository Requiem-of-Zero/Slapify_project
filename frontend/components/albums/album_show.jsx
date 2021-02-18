import React, { Component } from 'react';
import LoggedInNav from '../splash_page/logged_in/logged_in_nav_bar';
import MusicPlayerContainer from '../music_player/music_player_container';
import { logout } from '../../actions/session_actions';
import SongIndexItem from '../songs/song_index_item';
import { BiTime } from 'react-icons/bi';

class AlbumShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: null,
      hoveredSongId: null,
    }
  }

  componentDidMount() {
    // console.log(this.props)
    this.props.getAlbum(+this.props.match.params.albumId)
    this.props.getAllArtists()
  }

  handleQueue() {
    const { hoveredSongId } = this.state;
    const { songs, receiveQueue } = this.props;

    receiveQueue(songs.filter(song => song.id >= hoveredSongId))
  }

  render() {
    const { songs, album, artists } = this.props;
    const bullet = '\u2022';

    return this.props.album ? (
      <div className="show-wrapper">
        <div className="album-show-wrapper">
          <div className="album-details">
            <img className="album" src={album.imgUrl}/>
            <div className="detail-content">
              <p>ALBUM</p>
              <h1>{album.albumName}</h1>
              <p>
                <span className="album-artist">
                  {(artists[album.artistId]).name}
                </span>
                {`${bullet} ${album.year} ${bullet}`} {Object.values(this.props.songs).length} songs 
              </p>
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
                {songs.map((song, i) => 
                  <SongIndexItem 
                    song={song} 
                    onMouseEnter={() => this.setState( { hoveredSongId: song.id})}
                    handleQueue={() => this.handleQueue()}
                    key={song.id}
                    songId={song.id}
                    id={i} 
                    artists={artists} 
                    album={album}
                    location={'album'}
                  />
                )}
              </ul>
            </div>
          </div>
      </div>
    ) : null;
  }
}

export default AlbumShow;