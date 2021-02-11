import React, { Component } from 'react'
import SearchContainer from '../search/search_container';

export default class PlaylistShow extends Component {

  handleClick(){
    this.props.deletePlaylist(this.props.currPlaylistId)
    this.props.history.push('/')
  }

  componentDidMount(){
    this.props.getPlaylistInfo(this.props.currPlaylistId)
  }

  render() {
    const { playlists, currPlaylistId, currentUser, playlistSongs } = this.props

    return playlists[currPlaylistId] ? (
      <div className="playlist-show-wrapper">
        <div className="playlist-details">
          <img src="https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5/image-size/large?v=1.0&px=999"/>
          <div className="detail-content">
            <p>PLAYLIST</p>
            <h1>{playlists[currPlaylistId].playlistName}</h1>
            <p>{currentUser.email}</p>
            <a onClick={() => this.handleClick()}>DELETE</a>
          </div>
        </div>
        <div className="playlist-content">
          {Object.values(playlistSongs).length === 0 
          ? <SearchContainer />
          : null
          }
        </div>
      </div>
    ) : null;
  }
}
