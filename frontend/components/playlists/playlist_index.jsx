import React, { Component } from 'react';
import PlaylistIndexItem from './playlist_index_item';
import { GrFormAdd } from 'react-icons/gr';

export default class PlaylistIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser,
      playlist_name: 'My Playlist'
    }

    this.handleCreate = this.handleCreate.bind(this)
  }

  componentDidMount() {
    this.props.getUserPlaylists()
  }

  handleCreate() {
    this.props.createPlaylist(this.state)
  }

  render() {
    const { playlists } = this.props
    if(!playlists) return null;
    return (
      <div className='playlists-wrapper'>
        <h3>PLAYLISTS</h3>
        <div className="create-playlist" onClick={this.handleCreate}>
          <GrFormAdd size={30} className='create-btn' />
          <span>Create Playlist</span>
        </div>
        <ul>
          { Object.values(playlists).map( playlist => 
            <PlaylistIndexItem 
              playlist={playlist}/>) 
          }
        </ul>
      </div>
    )
  }
}
