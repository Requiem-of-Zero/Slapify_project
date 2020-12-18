import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import SongsReducer from "./songs_reducer";
import AlbumsReducer from "./albums_reducer";
import ArtistsReducer from './artists_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  songs: SongsReducer,
  albums: AlbumsReducer,
  artists: ArtistsReducer,
});

export default EntitiesReducer;