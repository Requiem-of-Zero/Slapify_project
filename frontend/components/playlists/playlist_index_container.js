import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { getUserPlaylists, createPlaylist, deletePlaylist } from '../../actions/playlist_actions';

const mstp = state => ({
  playlists: state.entities.playlists,
  currentUser: state.session.id,
})

const mdtp = dispatch => ({
  getUserPlaylists: () => dispatch(getUserPlaylists()),
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId))
})

export default connect(mstp, mdtp)(PlaylistIndex)