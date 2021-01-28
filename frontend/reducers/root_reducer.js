import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import MusicPlayerReducer from './music_player_reducer'
import UiReducer from './ui_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  errors: ErrorsReducer,
  session: SessionReducer,
  music: MusicPlayerReducer,
})

export default RootReducer;