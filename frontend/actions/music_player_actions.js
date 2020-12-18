export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
export const RECEIVE_PREVIOUS_SONG = 'RECEIVE_PREVIOUS_SONG';
export const RECEIVE_NEXT_SONG = 'RECEIVE_NEXT_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const RECEIVE_SHUFFLE = 'RECEIVE_SHUFFLE';

export const receiveCurrentSong = songId => ({
  type: RECEIVE_CURRENT_SONG,
  songId
});

export const receiveQueue = queue => ({
  type: RECEIVE_QUEUE,
  queue
});

export const receivePreviousSong = songId => ({
  type: RECEIVE_PREVIOUS_SONG,
  songId
})

export const receiveNextSong = songId => ({
  type: RECEIVE_NEXT_SONG,
  songId
});

export const playSong = () => ({
  type: PLAY_SONG
})

export const pauseSong = () => ({
  type: PAUSE_SONG
})

export const receiveShuffled = songs => ({
  type: RECEIVE_SHUFFLE,
  songs
});

export const updateCurrentSong = song => dispatch => (
  dispatch(receiveCurrentSong(song))
);

export const updateQueue = queue => dispatch => (
  dispatch(receiveQueue(queue))
);