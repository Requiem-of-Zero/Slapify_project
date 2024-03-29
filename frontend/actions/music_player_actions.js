export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
export const PAUSE_SONG = 'PAUSE_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const SHUFFLE_SONGS = 'SHUFFLE_SONGS';
export const NEXT_SONG = 'NEXT_SONG';
export const PREV_SONG = 'PREV_SONG';
export const LOOP_SONG = 'LOOP_SONG';
export const PLAY_INDIV_SONG = 'PLAY_INDIV_SONG';
export const TOGGLE_SONG = 'TOGGLE_SONG';

export const receiveSong = currentSong => ({
  type: RECEIVE_CURRENT_SONG,
  currentSong
});

export const receiveQueue = queue => ({
  type: RECEIVE_QUEUE,
  queue
});

export const playSong = () => ({
  type: PLAY_SONG,
})

export const pauseSong = () => ({
  type: PAUSE_SONG,
})

export const nextSong = () => ({
  type: NEXT_SONG,
})

export const prevSong = () => ({
  type: PREV_SONG,
})

export const loopSongs = () => ({
  type: LOOP_SONG,
})

export const shuffleSongs = () => ({
  type: SHUFFLE_SONGS,
});

export const playIndivSong = songId => ({
  type: PLAY_INDIV_SONG,
  songId
})

export const togglePlayPause =  () => ({
  type: TOGGLE_SONG,
})

export const pickSong = (queueLength, playedIdx) => {
    var newIdx = Math.floor(Math.random() * Math.floor(queueLength));
    if (playedIdx.includes(newIdx)) {
        return pickSong(queueLength, playedIdx);
    } else {
        return newIdx;
    }
};

