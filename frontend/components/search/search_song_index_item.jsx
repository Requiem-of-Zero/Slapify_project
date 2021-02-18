import React from 'react';
import PlaylistSongAdder from '../playlists/playlist_song_adder';
import { connect } from 'react-redux';
import { FaPlay, FaPause } from 'react-icons/fa';
import { playSong, pauseSong, playIndivSong } from '../../actions/music_player_actions';
import { addSongToPlaylist, removeSongFromPlaylist } from '../../actions/playlist_actions';
import { BiTime } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const mstp = state => ({
  playlists: Object.values(state.entities.playlists),
  currentSong: state.music.currentSong,
  playing: state.music.playing
});

const mdtp = dispatch => ({
  pause: () => dispatch(pauseSong()),
  play: () => dispatch(playSong()),
  playIndivSong: songId => dispatch(playIndivSong(songId)),
  addSongToPlaylist: (songId, playlistId) =>
    dispatch(addSongToPlaylist(songId, playlistId)),
  removeSongFromPlaylist: (songId, playlistId) => 
    dispatch(removeSongFromPlaylist(songId, playlistId))
})

class SearchSongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: '',
      hoveredSongId: null,
      key: null
    }
  }

  componentDidMount() {
    this.props.handleQueue()
  }

  render() {
    const { song, id, imgUrl, albumName, albumId, artists,
        album, receiveSong, addSongToPlaylist, playIndivSong, 
        removeSongFromPlaylist, location, playlists, playing, currentSong, songId } = this.props;

    const { hover, hoveredSongId, key } = this.state;

    let playBtn = playing
      ? <FaPause onClick={this.props.pause}/> 
      : <FaPlay onClick={() => playIndivSong(hoveredSongId)} />

    if(currentSong){
      playBtn = currentSong.id === key && playing
        ? <FaPause onClick={this.props.pause}/> 
        : <FaPlay onClick={() => playIndivSong(hoveredSongId)} />
    }

    return (
      <div>
        <li className='indiv-songs'
            onMouseEnter={() => this.setState({hover: 'hovering', hoveredSongId: id, key: songId})}
            onMouseLeave={() => this.setState({hover: ''})}>
          
          <div className="search-details-wrapper" >
            <div className="song-info">
              <div className="song-desc">
                {this.state.hover === 'hovering' ? playBtn : id+1}
                <Link to={`/albums/${albumId}`}>
                  <img src={ imgUrl } width="50" height="50" className="search-photo"/>
                </Link>
                <div className="desc-inner">
                  <Link to={`/albums/${song.albumId}`}>
                    {albumName}
                  </Link>
                  <p>{song.songName}</p>
                </div>
              </div>
            </div>
            <div className="song-artist">
              <p>{(artists[album.artistId]).name}</p>
            </div>
            <div className="song-duration">
                {this.state.hover === 'hovering' ? 
                <PlaylistSongAdder
                  playlists={playlists} 
                  songId={song.id} 
                  addSongToPlaylist={addSongToPlaylist}
                  removeSongFromPlaylist={removeSongFromPlaylist}
                  location={location}
                /> : null }
              <p>{song.duration}</p>
            </div>
          </div>
        </li>
      </div>
    )
  }
}

export default connect(mstp, mdtp)(SearchSongIndexItem);