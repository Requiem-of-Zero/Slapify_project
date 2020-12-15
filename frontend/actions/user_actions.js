import * as UserAPIUtil from '../util/user_api_util';
import { login } from '../actions/session_actions';

export const fetchUser = id => dispatch => (
  UserAPIUtil.beFetchUser(id).then( user => dispatch(login(user)))
);
