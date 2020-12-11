import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => {
  return({
    type: CLEAR_ERRORS,
  })
}


export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(user => {
    return dispatch(receiveCurrentUser(user))
  },
  error => {
    return dispatch(receiveErrors(error.responseJSON))})
  );

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(user => { 
    return dispatch(receiveCurrentUser(user)) 
  },
  error => { 
    return dispatch(receiveErrors(error.responseJSON))
  })
);

