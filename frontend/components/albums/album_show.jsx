import React, { Component } from 'react';
import LoggedInNav from '../splash_page/logged_in/logged_in_nav_bar';
import MusicPlayerContainer from '../music_player/music_player';
import { logout } from '../../actions/session_actions';
import SongIndexItem from '../songs/song_index_item';

class AlbumShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.albumId)
    console.log(this.props);
  }

  render() {
    const { songs, currentUser, updateCurrentSong, imgUrl } = this.props;
    let preloadSong = songs[0]
    return (
      <div>
        <LoggedInNav currentUser={currentUser} logout={logout} />
        <img className="album" src={imgUrl}/>
        <ul className='album-show' >
          {songs.map(song => <SongIndexItem song={song} updateCurrentSong={updateCurrentSong}/>)}
        </ul>
        <MusicPlayerContainer song={preloadSong} />
      </div>
    )
  }
}

export default AlbumShow;