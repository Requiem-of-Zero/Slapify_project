import React, { Component } from 'react'
import SearchContainer from '../search/search_container';
import PlaylistSongItem from './playlist_song_index_item';
import { RIETextArea } from 'riek';
import { BiTime } from 'react-icons/bi';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import PlaylistEditModal from '../edit_modal/playlist_edit';
import { timeAdder } from '../../util/album_api_util';

export default class PlaylistShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredSongId: null,
      selectedSongId: null,
    }
  }

  handleDelete(){
    this.props.deletePlaylist(this.props.currPlaylist.id)
    this.props.history.push('/')
  }

  componentDidMount(){
    this.props.getPlaylistInfo(this.props.match.params.playlistId)
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.match.params.playlistId !== this.props.match.params.playlistId){
      this.props.clearPlaylistInfo()
      this.props.getPlaylistInfo(this.props.match.params.playlistId)
    } 
  }

  handleQueue() {
    const { hoveredSongId } = this.state;
    const { playlistSongs, receiveQueue } = this.props;

    receiveQueue(playlistSongs.filter(song => song.id >= hoveredSongId))
  }

  render() {
    const { currPlaylist, currentUser, playlistSongs, playIndivSong, removeSongFromPlaylist, albums, artists, updatePlaylist, pause } = this.props
    const bullet = '\u2022';

    var pluralSong;

    playlistSongs.length === 1 ? pluralSong = 'song' : pluralSong = 'songs';

    var hasSongs;

    if(playlistSongs.length !== 0) {
      hasSongs = ''
    } else {
      hasSongs = 'hidden'
    }

    return currPlaylist ? (
      <div className="playlist-show-wrapper">
        <div className="playlist-details">
          {Object.values(albums).length < 4 
            ? <img 
                src="https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5/image-size/large?v=1.0&px=999"
                className='playlist-cover'
              />
            : <ul 
                className='cover-cluster'
              >
              <li
                className='indiv-playlist-img'
              >
                {Object.values(albums).slice(0, 4).map(album => <img src={album.imgUrl} />)}
              </li>
            </ul>
          }
          <div className="detail-content">
            <p>PLAYLIST</p>
            <div className="playlist-name-edit-container">
            </div>
              <PlaylistEditModal
                albums={albums}
                playlist={currPlaylist}
                updatePlaylist={updatePlaylist}
              />
            <div className="detail-lower">
              <div className="playlist-info">
                <p>{`${currentUser.email}`}</p>
                <span className={hasSongs} >{bullet}</span>
                <p className={hasSongs} >{`${playlistSongs.length} ${pluralSong}`}</p>
                <span className={hasSongs} >{bullet}</span>
                <p className={hasSongs} >{timeAdder(playlistSongs.map(song => song.duration))}</p>
              </div>
              <FiTrash2 
                className='pointer' 
                onClick={() => this.handleDelete()}
              >
                DELETE
              </FiTrash2>
            </div>
          </div>
        </div>
        <div className="playlist-content">
          {playlistSongs.length !== 0 
          ? <div className="playlist-song-labels">
            <div className="song-id">
              <p>#</p>
              <p>TITLE</p>
            </div>
            <div className="playlist-album">
              <p>ALBUM</p>
            </div>
            <div className="duration-label">
              <p>
                <BiTime />
              </p>
            </div>
          </div> 
          : <div className="song-labels"></div>}
          {playlistSongs.length === 0 
          ? <h3 className='no-songs default'>No songs currently in playlist.</h3>
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
              pause={pause}
            />
          )}
        </div>
      </div>
    ) : null;
  }
}
