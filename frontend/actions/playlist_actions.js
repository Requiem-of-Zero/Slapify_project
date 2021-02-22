import * as PlaylistsAPI from '../util/playlist_api_util';

export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
export const RECEIVE_NEW_PLAYLIST = 'RECEIVE_NEW_PLAYLIST';
export const UPDATE_PLAYLIST_NAME = 'UPDATE_PLAYLIST_NAME';
export const RECEIVE_PLAYLIST_INFO = 'RECEIVE_PLAYLIST_INFO';
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const RECEIVE_PLAYLIST_SONG = "RECEIVE_PLAYLIST_SONG";
export const REMOVE_PLAYLIST_SONG = "REMOVE_PLAYLIST_SONG";
export const CLEAR_PLAYLIST_INFO = "CLEAR_PLAYLIST_INFO";

export const receiveUserPlaylists = playlists => ({
  type: RECEIVE_USER_PLAYLISTS,
  playlists
});

export const receiveNewPlaylist = playlist => ({
  type: RECEIVE_NEW_PLAYLIST,
  playlist
});

export const updatePlaylistName = playlist => ({
  type: UPDATE_PLAYLIST_NAME,
  playlist
});

export const receivePlaylistInfo = payload => ({
  type: RECEIVE_PLAYLIST_INFO,
  payload
});

export const removePlaylist = playlistId => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

export const receivePlaylistSong = songId => ({
  type: RECEIVE_PLAYLIST_SONG,
  songId
});

export const removePlaylistSong = songId => ({
  type: REMOVE_PLAYLIST_SONG,
  songId
});

export const clearPlaylistInfo = () => {
  return({
    type: CLEAR_PLAYLIST_INFO,
  })
}

//thunk actions

export const createPlaylist = playlist => dispatch => (
  PlaylistsAPI.createPlaylist(playlist)
  .then(playlist => dispatch(receiveNewPlaylist(playlist)))
);

export const updatePlaylist = playlist => dispatch => (
  PlaylistsAPI.updatePlaylist(playlist)
  .then(playlist => console.log(playlist))
);

export const deletePlaylist = playlistId => dispatch => (
  PlaylistsAPI.removePlaylist(playlistId)
  .then(playlistId => dispatch(removePlaylist(playlistId)))
);

export const getUserPlaylists = () => dispatch => (
  PlaylistsAPI.receiveUserPlaylists()
  .then(playlists => dispatch(receiveUserPlaylists(playlists)))
);

export const getPlaylistInfo = playlistId => dispatch => (
  PlaylistsAPI.receivePlaylist(playlistId)
  .then(payload => dispatch(receivePlaylistInfo(payload)))
);

export const addSongToPlaylist = (songId, playlistId) => dispatch => (
  PlaylistsAPI.addSongToPlaylist(songId, playlistId)
  .then(songId => dispatch(receivePlaylistSong(songId)))
);

export const removeSongFromPlaylist = (songId, playlistId) => dispatch => (
  PlaylistsAPI.removeSongFromPlaylist(songId, playlistId)
  .then(songId => dispatch(removePlaylistSong(songId)))
);

