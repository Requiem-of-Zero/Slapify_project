export const fetchSong = songId => (
  $.ajax({
    url: `/api/songs/${songId}`
  })
);

export const fetchSongs = () => (
  $.ajax({
    url: `/api/songs`
  })
);

export const selectSong = songId => (
  $.ajax({
    url: `/api/songs/${songId}`,
    method: "PATCH",
  })
)