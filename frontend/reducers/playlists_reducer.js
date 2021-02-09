import { 
  RECEIVE_USER_PLAYLISTS,
  RECEIVE_NEW_PLAYLIST,
  UPDATE_PLAYLIST_NAME,
  REMOVE_PLAYLIST
} from '../actions/playlist_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const PlaylistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState };

  switch (action.type) {
    case RECEIVE_USER_PLAYLISTS:
      return action.playlists;
    case RECEIVE_NEW_PLAYLIST:
      newState[action.playlist.id] = action.playlist;
      return newState;
    case UPDATE_PLAYLIST_NAME:
      newState[action.playlist.id].playlistName = action.playlist.playlistName;
      return newState;
    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
}

export default PlaylistsReducer;