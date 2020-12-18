import { combineReducers } from 'redux';
import MusicPlayerReducer from './music_player_reducer';

const UiReducer = combineReducers({
  musicPlayer: MusicPlayerReducer
})

export default UiReducer;