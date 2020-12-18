import * as ArtistAPIUtil from '../util/artist_api_util'

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

const receiveAllArtists = artists => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const getArtist = artistId => dispatch => (
  ArtistAPIUtil.fetchArtist(artistId).then(artist => dispatch(receiveArtist(artist)))
);

export const getAllArtists = () => dispatch => (
  ArtistAPIUtil.fetchAllArtists().then(artists => dispatch(receiveAllArtists(artists)))
);