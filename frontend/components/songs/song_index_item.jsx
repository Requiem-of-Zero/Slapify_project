import React from 'react';
import { connect } from 'react-redux'
import { FaPlay, FaPause } from 'react-icons/fa';
import { playSong, pauseSong, playIndivSong } from '../../actions/music_player_actions';
import PlaylistIndex from '../playlists/playlist_index_container';
import Modal from 'react-modal';
import PlaylistSongAdder from '../playlists/playlist_song_adder';
import { addSongToPlaylist, removeSongFromPlaylist } from '../../actions/playlist_actions';

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
    }

    this.toggleModal = this.toggleModal.bind(this)
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

  render() {
    const { song, id, songId, playing, currentSong,
            playIndivSong, addSongToPlaylist, removeSongFromPlaylist, location, playlists } = this.props;
    const { hover, hoveredSongId, key } = this.state;

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
            <div className="song-title">
              {song.songName}
            </div>
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
            <p className='duration'>{song.duration}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default connect(mstp, mdtp)(SongIndexItem);