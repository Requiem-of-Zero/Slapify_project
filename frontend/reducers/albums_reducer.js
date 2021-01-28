import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM, CLEAR_ALBUMS } from '../actions/album_actions';


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
    case CLEAR_ALBUMS:
      return {}
    default:
      return oldState
  }
}

export default AlbumsReducer;