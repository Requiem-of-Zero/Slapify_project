import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';

const AlbumsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      return action.albums
    case RECEIVE_ALBUM:
      newState[action.album.id] = action.album
      return newState
    default:
      return oldState
  }
}

export default AlbumsReducer;