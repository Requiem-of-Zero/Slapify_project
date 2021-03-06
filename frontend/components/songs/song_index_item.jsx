import React from 'react';
import { connect } from 'react-redux'
import { FaPlay, FaPause } from 'react-icons/fa';
import { playSong, pauseSong, playIndivSong } from '../../actions/music_player_actions';
import PlaylistIndex from '../playlists/playlist_index_container';
import PlaylistSongAdder from '../playlists/playlist_song_adder';
import { addSongToPlaylist, removeSongFromPlaylist } from '../../actions/playlist_actions';
import { BsThreeDots } from 'react-icons/bs';

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

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: '',
      hoveredSongId: null,
      key: null,
      isOpen: false,
      color: '',
      selected: 'hidden',
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  //Mounts the queue when the songs are being rendered, hacky way, but works
  componentDidMount() {
    this.props.handleQueue()
  }

  toggleModal(e) {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleDropdown(){
    const { selected } = this.state;
    selected === 'selected' 
    ? this.setState({selected: 'hidden'}) 
    : this.setState({selected: 'selected'})
  }

  render() {
    const { song, id, songId, playing, currentSong,
            playIndivSong, addSongToPlaylist, removeSongFromPlaylist, location, playlists } = this.props;
    const { hover, hoveredSongId, key, selected } = this.state;

    //Play and pause button logic for each song item in album
    let playBtn = playing
      ? <FaPause onClick={this.props.pause}/> 
      : <FaPlay onClick={() => playIndivSong(hoveredSongId)} />

    if(currentSong){
      playBtn = currentSong.id === key && playing
        ? <FaPause onClick={this.props.pause}/> 
        : <FaPlay onClick={() => playIndivSong(hoveredSongId)} />
    }

    return (
      <li className='indiv-songs'
          onMouseEnter={() => {this.setState({hover: 'hovering', hoveredSongId: id, key: songId})}}
          onMouseLeave={() => this.setState({hover: ''})}
          onDoubleClick={() => playIndivSong(hoveredSongId)}
      >
        <div className="song-details-wrapper" >
          <div className="song-info">
            <a  
              className={hover} >
              {this.state.hover === 'hovering' ? playBtn : id+1}
            </a>
            <div className="albums-song-title default">
              {currentSong && (currentSong.id === key) 
                ? <h3 className='green'>{song.songName}</h3>
                : <h3>{song.songName}</h3>}
            </div>
          </div>
          <div className="album-song-duration">
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
            <p className='duration'>{song.duration}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default connect(mstp, mdtp)(SongIndexItem);