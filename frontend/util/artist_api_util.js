export const fetchArtist = artistId => (
  $.ajax({
    url: `/api/artists/${artistId}`
  })
)

export const fetchAllArtists = () => (
  $.ajax({
    url: `/api/artists`
  })
)