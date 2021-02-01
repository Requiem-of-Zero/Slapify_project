import { getAllSongs } from '../../actions/song_actions';
import { getAllAlbums } from '../../actions/album_actions';
import { connect } from 'react-redux';
import Search from './search';
import { getAllArtists } from '../../actions/artist_actions';

const mstp = ({ entities: {songs, albums, artists} }) => ({
  songs: Object.values(songs),
  albums,
  artists
})

const mdtp = dispatch => ({
  getAllSongs: () => dispatch(getAllSongs()),
  getAllAlbums: () => dispatch(getAllAlbums()),
  getAllArtists: () => dispatch(getAllArtists()),
})

export default connect(mstp, mdtp)(Search);