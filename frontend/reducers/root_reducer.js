import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import UiReducer from './ui_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  errors: ErrorsReducer,
  session: SessionReducer,
  ui: UiReducer
})

export default RootReducer;