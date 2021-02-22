import React, { Component } from 'react';

export default class PlaylistSongAdder extends Component {
  constructor(props) {
    super(props);
  }

  handleAdd(songId, playlistId) {
    this.props.addSongToPlaylist(songId, playlistId);
  }

  handleRemove(songId, playlistId) {
    this.props.removeSongFromPlaylist(songId, playlistId);
  }

  render() {
    const { playlists, songId, playlistId, location, selected } = this.props;

    if(location === 'album') {
      const playlistsArr = playlists.map(playlist => (
        <li 
          className='playlist-menu-item'
          key={playlist.id}
          onClick={() => this.handleAdd(songId, playlist.id)}
        >
          {playlist.playlistName}
        </li>
      ));

      var dropdown = (
        <>
          <li className='song-menu-item'>Add to Playlist</li>
          <ul className='playlist-list'>{playlistsArr}</ul>
        </>
      )
    } else if (location === 'playlist') {
      var dropdown = (
        <>
          <li 
            className='remover pointer'
            onClick={() => this.handleRemove(songId, playlistId)}
          >
            Remove from Playlist
          </li>
        </>
      )
    }
    return (
      <ul className={`${selected}`}>
        {dropdown}
      </ul>
    )
  }
}