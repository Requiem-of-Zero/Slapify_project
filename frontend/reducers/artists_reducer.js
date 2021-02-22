import { RECEIVE_ARTIST, RECEIVE_ALL_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_PLAYLIST_INFO, CLEAR_PLAYLIST_INFO } from '../actions/playlist_actions';

const ArtistsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_ARTIST:
      newState[action.artist.id] = action.artist
      return newState
    case RECEIVE_ALL_ARTISTS:
      return action.artists
    case RECEIVE_PLAYLIST_INFO:
      return { ...action.payload.artists, ...oldState }
    case CLEAR_PLAYLIST_INFO:
      return {};
    default:
      return oldState
  }
}

export default ArtistsReducer;