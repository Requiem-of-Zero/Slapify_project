export const getSongsByAlbumId = (state, albumId) => {
  return Object.values(state.entities.songs)
  .filter(song => song.albumId === albumId)
};
