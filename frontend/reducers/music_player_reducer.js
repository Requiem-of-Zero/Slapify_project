import { RECEIVE_CURRENT_SONG } from '../actions/music_player_actions';

const MusicPlayerReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return action.currentSong
    default:
      return oldState
  }
}

export default MusicPlayerReducer;