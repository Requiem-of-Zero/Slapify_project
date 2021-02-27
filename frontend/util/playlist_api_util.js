export const createPlaylist = playlist => (
  $.ajax({
    url: '/api/playlists',
    method: "POST",
    data: { playlist }
  })
);

export const updatePlaylist = playlist => (
  $.ajax({
    url: `/api/playlists/${playlist.id}`,
    method: "PATCH",
    data: { playlist }
  })
);

export const removePlaylist = playlistId => (
  $.ajax({
    url: `/api/playlists/${playlistId}`,
    method: "DELETE"
  })
);

export const receiveUserPlaylists = () => (
  $.ajax({
    url: `/api/playlists`,
  })
);

export const receivePlaylist = playlistId => (
  $.ajax({
    url: `/api/playlists/${playlistId}`
  })
);

export const addSongToPlaylist = (songId, playlistId) => (
  $.ajax({
    url: `/api/playlists/${playlistId}/songs/${songId}`,
    method: "POST"
  })
);

export const removeSongFromPlaylist = (songId, playlistId) => (
  $.ajax({
    url: `/api/playlists/${playlistId}/songs/${songId}`,
    method: "DELETE"
  })
);