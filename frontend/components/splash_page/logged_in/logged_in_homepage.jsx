import React from 'react';
import LoggedInNav from './logged_in_nav_bar';
import SongIndexContainer from '../../songs/songs_index_container';
import MusicPlayerContainer from '../../music_player/music_player_container';


class LoggedInHomepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {currentUser, logout} = this.props;

    return(
      <div className="music-player">
        <LoggedInNav currentUser={currentUser} logout={logout} />
        <div className="album-container">
          <SongIndexContainer />
        </div>
        <MusicPlayerContainer />
      </div>
      
    )
  }
}

export default LoggedInHomepage;