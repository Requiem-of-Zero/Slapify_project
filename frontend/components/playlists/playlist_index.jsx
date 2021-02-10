import React, { Component } from 'react';
import PlaylistIndexItem from './playlist_index_item';
import { GrFormAdd } from 'react-icons/gr';

export default class PlaylistIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser,
      playlist_name: 'My Playlist #1'
    }

    this.handleCreate = this.handleCreate.bind(this)
  }

  componentDidMount() {
    this.props.getUserPlaylists()
  }

  componentDidUpdate(prevProps) {
    if( prevProps.playlists !== this.props.playlists ) {
      this.setState({ playlist_name: `My Playlist #${Object.values(this.props.playlists).length + 1}`})
    }
  }

  handleCreate() {
    this.props.createPlaylist(this.state)
  }

  render() {
    const { playlists, deletePlaylist } = this.props
    if(!playlists) return null;
    return (
      <div className='playlists-wrapper'>
        <h3>PLAYLISTS</h3>
        <div className="create-playlist" onClick={this.handleCreate}>
          <GrFormAdd size={30} className='create-btn' />
          <span>Create Playlist</span>
        </div>
        <div className="sidebar-line"></div>
        <ul className="playlist-index">
          { Object.values(playlists).map( playlist => 
            <PlaylistIndexItem 
              playlist={playlist}
              deletePlaylist={deletePlaylist}
            />) 
          }
        </ul>
      </div>
    )
  }
}
