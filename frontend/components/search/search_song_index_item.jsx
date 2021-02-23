import React from 'react';
import PlaylistSongAdder from '../playlists/playlist_song_adder';
import { connect } from 'react-redux';
import { FaPlay, FaPause } from 'react-icons/fa';
import { playSong, pauseSong, playIndivSong } from '../../actions/music_player_actions';
import { addSongToPlaylist, removeSongFromPlaylist } from '../../actions/playlist_actions';
import { BsThreeDots } from 'react-icons/bs';
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
      key: null,
      selected: 'hidden'
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  componentDidMount() {
    this.props.handleQueue()
  }

  toggleDropdown(){
    const { selected } = this.state;
    selected === 'selected' 
    ? this.setState({selected: 'hidden'}) 
    : this.setState({selected: 'selected'})
  }

  render() {
    const { song, id, imgUrl, albumName, albumId, artists,
        album, receiveSong, addSongToPlaylist, playIndivSong, 
        removeSongFromPlaylist, location, playlists, playing, currentSong, songId } = this.props;

    const { hover, hoveredSongId, key, selected } = this.state;

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
            onMouseLeave={() => this.setState({hover: ''})}
            onDoubleClick={() => playIndivSong(hoveredSongId)}
        >
          
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
                  {currentSong && (currentSong.id === key) 
                    ? <h3 className='green default'>{song.songName}</h3>
                    : <h3 className='default gray'>{song.songName}</h3>}
                </div>
              </div>
            </div>
            <div className="song-artist">
              <p>{(artists[album.artistId]).name}</p>
            </div>
            <div className="search-song-duration">
              <div className="dropdown">
                <BsThreeDots className='dropdown-dots' onClick={this.toggleDropdown}/>
                <PlaylistSongAdder
                  playlists={playlists} 
                  songId={song.id} 
                  addSongToPlaylist={addSongToPlaylist}
                  removeSongFromPlaylist={removeSongFromPlaylist}
                  toggleDropdown={() => this.toggleDropdown()}
                  location={location}
                  selected={selected}
                />
              </div>
              <p className='song-duration'>{song.duration}</p>
            </div>
          </div>
        </li>
      </div>
    )
  }
}

export default connect(mstp, mdtp)(SearchSongIndexItem);