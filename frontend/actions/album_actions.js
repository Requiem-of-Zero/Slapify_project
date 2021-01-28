import * as AlbumAPIUtils from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM ='RECEIVE_ALBUM';
export const CLEAR_ALBUMS = 'CLEAR_ALBUMS';

const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
})

const receiveAlbum = (payload) => ({
  type: RECEIVE_ALBUM,
  payload
})

export const clearAlbums = () => ({
  type: CLEAR_ALBUMS,
})

export const getAllAlbums = () => dispatch => (
  AlbumAPIUtils.fetchAlbums().then(albums => {
    dispatch(receiveAllAlbums(albums)
  )})
);

export const getAlbum = albumId => dispatch => (
  AlbumAPIUtils.fetchAlbum(albumId).then(payload => {
    console.log(payload);
    dispatch(receiveAlbum(payload))
  })
);