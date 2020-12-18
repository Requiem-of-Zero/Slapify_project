import 
{ 
  RECEIVE_CURRENT_SONG,
  RECEIVE_QUEUE,
  RECEIVE_PREVIOUS_SONG,
  RECEIVE_NEXT_SONG,
  PAUSE_SONG,
  PLAY_SONG,
  RECEIVE_SHUFFLE,
} 
from '../actions/music_player_actions';

// const defaultState = {
//   queue: [],
//   previousTrack: [],
//   shuffled:[],
//   currentSongId: 17,
//   playing: false
// }

const MusicPlayerReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      // newState.currentSongId = action.songId;
      return action.currentSong
    case RECEIVE_QUEUE:
      newState.queue = Object.keys(action.queue)
      return newState
    case RECEIVE_PREVIOUS_SONG:
      if(!newState.previousTrack.includes(action.songId)) newState.previousTrack.push(action.songId)
    case RECEIVE_NEXT_SONG:
      newState.queue.unshift(action.songId);
      return newState
    case PAUSE_SONG:
      newState.playing = false;
      return nextState
    case PLAY_SONG:
      newState.playing = true;
      return newState
    case RECEIVE_SHUFFLE:
      const songs = Object.values(action.songs);

      for(let i=0; i < songs.length - 1; i++) {
        let randomNum = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[randomNum]] = [songs[randomNum], songs[i]];
      }

      songs.forEach( song => newState.shuffled.push(song.id));
      return newState
    default:
      return oldState
  }
}

export default MusicPlayerReducer;