import React, { Component } from 'react';
import SearchSongIndexItem from './search_song_index_item';
import { BiSearch, BiTime } from 'react-icons/bi'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: props.songs
    }

    this.handleChange = this.handleChange.bind(this)
  }
  
  componentDidMount() {
    this.props.getAllSongs()
    this.props.getAllAlbums()
    this.props.getAllArtists()
  }

  handleChange(e) {
    const newSongs = this.props.songs.filter(song => 
        song.songName.toLowerCase().includes(e.target.value.toLowerCase())
      )
    this.setState({songs: newSongs})
  }

  render() {
    const { updateCurrentSong, albums, artists } = this.props
    const { songs } = this.state
    return songs ? (
      <div>
        <div className="search">
          <h2 className="search-icon"><BiSearch /></h2>
          <input type="text" onChange={this.handleChange} className="search-bar" placeholder='Search for a song'/>
        </div>
        <div className="search-labels">
          <div className="search-id">
            <p>#</p>
            <p>SONG</p>
            <p>ALBUM</p>
          </div>
          <div className="search-duration-label">
            <p>
              <BiTime />
            </p>
          </div>
        </div>
        <ul>
          {songs.map((song, i )=> 
          <SearchSongIndexItem url={song.url} song={song} id={i}
                                updateCurrentSong={updateCurrentSong}
                                imgUrl={(albums[song.albumId]).imgUrl}
                                albumName={(albums[song.albumId]).albumName}
                                albumId={song.albumId}
                                artists={artists}
                                album={albums[song.albumId]}/>)}
        </ul>
      </div>
    ) : null;
  }
}

export default Search;