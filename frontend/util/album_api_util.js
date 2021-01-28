export const fetchAlbums = () => (
  $.ajax({
    url: `/api/albums`
  })
);

export const fetchAlbum = albumId => (
  $.ajax({
    url: `/api/albums/${albumId}`
  })
);

export const getUserAlbums = () => (
  $.ajax({
    url: 'api/albums',
    data: { request_type: 'user'},
  })
)

export const getAlbumSongs = albumId => (
  $.ajax({
    url: `/api/albums/${albumId}/tracks`,
  })
)