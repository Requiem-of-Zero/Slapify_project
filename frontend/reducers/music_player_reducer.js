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
  pickSong
} 
from '../actions/music_player_actions';

const initialState = {
  active: false,
  queue: [],
  startIdx: 0,
  played: [],
  currentSongId: null,
  playing: false,
  loop: false,
  shuffle: false,
};



const MusicPlayerReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = { ...oldState }

  switch (action.type) {
    case RECEIVE_QUEUE:
      newState.active = true;
      newState.queue = action.queue;
      newState.startIdx = 0;
      newState.currentSong = newState.queue[newState.startIdx];
      newState.playing = true;
      return newState;

    case PREV_SONG:
      if (oldState.active) {
        newState.playing = true;
        if(state.played.length > 0) {
          let newPlayed = oldState.played
          let lastIdx = newPlayed.pop();
          newState.played = newPlayed;

          newState.startIdx = lastIdx;

          newState.currentSongId = oldState.queue[newState.startIdx];
          return newState;
        } else {
          newState.active = false;
          newState.currentTrack = null;
          newState.playing = false;
          return newState;
        }
      } else {
        return newSTate
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
            newState.currentSongId = state.queue[newState.startIdx];
            return newState
          } else {
            newState.active = false;
            newState.currentSongId = null;
            newState.playing = false;
            return newState;
          }
        }
      } else {
        return newState;
      }

    case PAUSE_SONG:
      newState.playing = false;
      return nextState

    case PLAY_SONG:
      if(state.queue.length) {
        newState.active = true;
        newState.currentSongId = newState.queue[newState.startIdx];
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
      return newState

    // case RECEIVE_SHUFFLE:
    //   const songs = Object.values(action.songs);

    //   for(let i=0; i < songs.length - 1; i++) {
    //     let randomNum = Math.floor(Math.random() * (i + 1));
    //     [songs[i], songs[randomNum]] = [songs[randomNum], songs[i]];
    //   }

    //   songs.forEach( song => newState.shuffled.push(song.id));
    //   return newState
    default:
      return oldState
  }
}

export default MusicPlayerReducer;