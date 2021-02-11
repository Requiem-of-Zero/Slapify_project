import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';

import { 
  deletePlaylist, getPlaylistInfo, updatePlaylist 
} from '../../actions/playlist_actions';

const mstp = (state, ownProps) => ({
  currPlaylistId: +ownProps.match.params.playlistId,
  playlists: state.entities.playlists,
  currentUser: state.entities.users[state.session.id],
  playlistSongs: state.entities.songs
})

const mdtp = dispatch => ({
  deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
  getPlaylistInfo: playlistId => dispatch(getPlaylistInfo(playlistId)),
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
})

export default connect(mstp, mdtp)(PlaylistShow)