import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import PlaylistSongAdder from './playlist_song_adder';

export default class PlaylistSongIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: '',
      hoveredSongId: null,
      key: null,
    }
  }

  componentDidMount() {
    this.props.handleQueue()
  }

  render() {
    const { song, id, songId, playing, currentSong, playlistId,
            playIndivSong, addSongToPlaylist, removeSongFromPlaylist, location, playlists,
            album, artists } = this.props;
    const { hover, hoveredSongId, key } = this.state;

    //Play and pause button logic for each song item in album
    let playBtn = playing
      ? <FaPause onClick={this.props.pause}/> 
      : <FaPlay onClick={() => playIndivSong(hoveredSongId)} />

    if(currentSong){
      playBtn = currentSong.id === key
        ? <FaPause onClick={this.props.pause}/> 
        : <FaPlay onClick={() => playIndivSong(hoveredSongId)} />
    }

    return (
      <li className='indiv-songs'
          onMouseEnter={() => {
            this.setState({hover: 'hovering', hoveredSongId: id, key: songId})
          }}
          onMouseLeave={() => this.setState({hover: ''})}>
        <div className="song-details-wrapper" >
          <div className="song-info">
            <a  
              className={hover} >
              {this.state.hover === 'hovering' ? playBtn : id+1}
            </a>
            <Link to={`/albums/${album.id}`}>
              <img src={album.imgUrl} height='50' width='50'/>
            </Link>
            <div className="song-title">
              {song.songName}
              {artists[album.artistId].name}
            </div>
            <Link to={`/albums/${album.id}`} className="song-album">
              {album.albumName}
            </Link>
          </div>
          <div className="song-duration">
            {this.state.hover === 'hovering' ? 
              <PlaylistSongAdder
                playlists={playlists} 
                playlistId={playlistId}
                songId={song.id} 
                addSongToPlaylist={addSongToPlaylist}
                removeSongFromPlaylist={removeSongFromPlaylist}
                location={location}
              /> : null }
            <p className='duration'>{song.duration}</p>
          </div>
        </div>
      </li>
    )
  }
}