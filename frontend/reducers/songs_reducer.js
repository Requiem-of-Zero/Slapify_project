import { RECEIVE_SONG, RECEIVE_ALL_SONGS } from '../actions/song_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions'
import { 
  RECEIVE_PLAYLIST_INFO, RECEIVE_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG 
} from '../actions/playlist_actions';

const SongsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ALBUM:
      return action.payload.songs;
    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;
    case RECEIVE_ALL_SONGS:
      return action.songs;
    case RECEIVE_PLAYLIST_INFO:
      return action.payload.tracks || {};
    case RECEIVE_PLAYLIST_SONG:
      return newState;
    case REMOVE_PLAYLIST_SONG:
      delete newState[action.songId];
      return newState;
    default:
      return oldState;
  }
}

export default SongsReducer;