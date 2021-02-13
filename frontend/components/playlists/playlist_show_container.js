import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';

import { 
  deletePlaylist, getPlaylistInfo, updatePlaylist, removeSongFromPlaylist
} from '../../actions/playlist_actions';

import { receiveQueue, playIndivSong } from '../../actions/music_player_actions';

const mstp = (state, ownProps) => ({
  currPlaylist: state.entities.playlists[ownProps.match.params.playlistId],
  currentUser: state.entities.users[state.session.id],
  playlistSongs: state.entities.songs
})

const mdtp = dispatch => ({
  deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
  getPlaylistInfo: playlistId => dispatch(getPlaylistInfo(playlistId)),
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  receiveQueue: queue => dispatch(receiveQueue(queue)),
  playIndivSong: songId => dispatch(playIndivSong(songId)),
  removeSongFromPlaylist: (songId, playlistId) => dispatch(removeSongFromPlaylist(songId, playlistId))
})

export default connect(mstp, mdtp)(PlaylistShow)