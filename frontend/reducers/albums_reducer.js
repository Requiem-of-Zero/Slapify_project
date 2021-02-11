import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_PLAYLIST_INFO } from '../actions/playlist_actions';


const AlbumsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState }

  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      return action.albums
    case RECEIVE_ALBUM:
      newState[action.payload.album.id] = {
                ...oldState[action.payload.album.id],
                ...action.payload.album,
            };
            return newState;
    case RECEIVE_PLAYLIST_INFO:
      return { ...newState, ...action.payload.albums };
    default:
      return oldState
  }
}

export default AlbumsReducer;