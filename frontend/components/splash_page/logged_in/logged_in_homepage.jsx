import React from 'react';
import LoggedInNav from './logged_in_nav_bar';
import SongIndexContainer from '../../songs/songs_index_container';
import MusicPlayerContainer from '../../music_player/music_player_container';
import AlbumIndexContainer from '../../albums/albums_index_container';
import { Route, Switch } from 'react-router-dom'
import AlbumShowContainer from '../../albums/album_show_container';
import Sidebar from '../../sidebar/sidebar';


class LoggedInHomepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {currentUser, logout} = this.props;

    return(
      <div className="music-player">
        <Sidebar />
        <div className="album-container">
          <Switch>
            <Route path="/albums/:albumId" component={AlbumShowContainer}/>
            <AlbumIndexContainer/>
          </Switch>
          {/* <SongIndexContainer /> */}
        </div>
        <MusicPlayerContainer />
      </div>
      
    )
  }
}

export default LoggedInHomepage;