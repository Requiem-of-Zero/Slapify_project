import { RECEIVE_SONG, RECEIVE_ALL_SONGS } from '../actions/song_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions'

const SongsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ALBUM:
      newState[action.album.id] = action.songs
      return newState[action.album.id]
    case RECEIVE_SONG:
      newState[action.song.id] = action.song
      return newState
    case RECEIVE_ALL_SONGS:
      return action.songs
    default:
      return oldState;
  }
}

export default SongsReducer;