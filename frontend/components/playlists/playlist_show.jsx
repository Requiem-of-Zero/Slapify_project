import React, { Component } from 'react'
import SearchContainer from '../search/search_container';
import PlaylistSongItem from './playlist_song_index_item';

export default class PlaylistShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredSongId: null,
      selectedSongId: null,
    }
  }

  handleClick(){
    this.props.deletePlaylist(this.props.currPlaylist.id)
    this.props.history.push('/')
  }

  componentDidMount(){
    this.props.getPlaylistInfo(this.props.match.params.playlistId)
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.match.params.playlistId !== this.props.match.params.playlistId){
      this.props.getPlaylistInfo(this.props.match.params.playlistId)
    }
  }

  handleQueue() {
    const { hoveredSongId } = this.state;
    const { playlistSongs, receiveQueue } = this.props;

    receiveQueue(playlistSongs.filter(song => song.id >= hoveredSongId))
  }

  render() {
    const { currPlaylist, currentUser, playlistSongs, playIndivSong, removeSongFromPlaylist, albums, artists } = this.props

    return currPlaylist ? (
      <div className="playlist-show-wrapper">
        <div className="playlist-details">
          <img 
            src="https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5/image-size/large?v=1.0&px=999"
            className='playlist-cover'
          />
          <div className="detail-content">
            <p>PLAYLIST</p>
            <h1>{currPlaylist.playlistName}</h1>
            <p>{currentUser.email}</p>
            <a onClick={() => this.handleClick()}>DELETE</a>
          </div>
        </div>
        <div className="playlist-content">
          {playlistSongs.length === 0 
          ? <h3>No songs currently in playlist.</h3>
          : playlistSongs.map((song, i) => 
            <PlaylistSongItem
              song={song}
              onMouseEnter={() => this.setState( { hoveredSongId: song.id})}
              handleQueue={() => this.handleQueue()}
              key={song.id}
              songId={song.id}
              id={i}  
              location={'playlist'}
              playIndivSong={playIndivSong}
              playlistId={+currPlaylist.id}
              removeSongFromPlaylist={removeSongFromPlaylist}
              artists={artists}
              album={albums[song.albumId]}
            />
          )}
        </div>
      </div>
    ) : null;
  }
}
