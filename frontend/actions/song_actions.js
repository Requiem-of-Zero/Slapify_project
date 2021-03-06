import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

const receiveSongs = songs => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const getSong = songId => dispatch => (
  SongAPIUtil.fetchSong(songId).then(song => dispatch(receiveSong(song)))
);

export const getAllSongs = () => dispatch => (
  SongAPIUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)))
);