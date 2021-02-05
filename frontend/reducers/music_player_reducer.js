import 
{ 
  RECEIVE_CURRENT_SONG,
  RECEIVE_QUEUE,
  PAUSE_SONG,
  PLAY_SONG,
  SHUFFLE_SONGS,
  NEXT_SONG,
  PREV_SONG,
  LOOP_SONG,
  PLAY_INDIV_SONG,
  pickSong
} 
from '../actions/music_player_actions';

const initialState = {
  active: false,
  queue: [],
  startIdx: 0,
  played: [],
  currentSong: null,
  playing: false,
  loop: false,
  shuffle: false,
  muted: false,
};



const MusicPlayerReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState }

  switch (action.type) {
    case RECEIVE_QUEUE:
      newState.queue = action.queue;
      return newState;

    case PREV_SONG:
      if (oldState.active) {
        newState.playing = true;
        if(oldState.played.length > 0) {
          let newPlayed = oldState.played
          let lastIdx = newPlayed.pop();
          newState.played = newPlayed;
          newState.startIdx = lastIdx;
          newState.currentSong = oldState.queue[newState.startIdx];
          return newState;
        } else {
          newState.active = false;
          newState.currentSong = null;
          newState.playing = false;
          return newState;
        }
      } else {
        return newState
      }

    case NEXT_SONG:
      if(oldState.active) {
        newState.playing = true;
        if(oldState.played.length < oldState.queue.length - 1) {
          let newPlayed = oldState.played;
          newPlayed.push(oldState.startIdx);
          newState.played = newPlayed;
          if(oldState.shuffle) {
            newState.startIdx = pickSong(
              oldState.queue.length,
              newPlayed
            )
          } else {
            newState.startIdx += 1;
          }
          newState.currentSong = oldState.queue[newState.startIdx];
          return newState;
        } else {
          newState.startIdx = 0;
          newState.played = [];
          if(oldState.loop) {
            newState.currentSong = oldState.queue[newState.startIdx];
            return newState
          } else {
            newState.active = false;
            newState.currentSong = null;
            newState.playing = false;
            return newState;
          }
        }
      } else {
        return newState;
      }

    case PAUSE_SONG:
      newState.playing = false;
      return newState

    case PLAY_SONG:
      if(oldState.queue.length) {
        newState.active = true;
        newState.currentSong = newState.queue[newState.startIdx];
        newState.playing = true;
        return newState;
      } else {
        return newState
      }

    case LOOP_SONG:
      newState.loop = !oldState.loop;
      return newState;

    case SHUFFLE_SONGS:
      newState.shuffle = !oldState.shuffle;
      return newState;

    case PLAY_INDIV_SONG:
      if(oldState.queue.length){
        newState.active = true;
        newState.startIdx = action.songId
        newState.currentSong = newState.queue[newState.startIdx];
        newState.playing = true;
        return newState;
      } else {
        return newState;
      }

    case RECEIVE_CURRENT_SONG:
      newState.active = true;
      newState.queue.push(action.currentSong)
      newState.currentSong = newState.queue[newState.startIdx]
      newState.playing = true;
      return newState;

    default:
      return oldState
  }
}

export default MusicPlayerReducer;