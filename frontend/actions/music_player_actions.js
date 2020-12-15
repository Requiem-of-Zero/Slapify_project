export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

const receiveCurrentSong = currentSong => ({
  type: RECEIVE_CURRENT_SONG,
  currentSong
})

export const updateCurrentSong = song => dispatch => (
  dispatch(receiveCurrentSong(song))
)
