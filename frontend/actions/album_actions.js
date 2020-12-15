import * as AlbumAPIUtils from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM ='RECEIVE_ALBUM';

const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
})

const receiveAlbum = ({album, songs}) => ({
  type: RECEIVE_ALBUM,
  album,
  songs
})

export const getAllAlbums = () => dispatch => (
  AlbumAPIUtils.fetchAlbums().then(albums => dispatch(receiveAllAlbums(albums)))
);

export const getAlbum = albumId => dispatch => (
  AlbumAPIUtils.fetchAlbum(albumId).then(payload => dispatch(receiveAlbum(payload)))
);