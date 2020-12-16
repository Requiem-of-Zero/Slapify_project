import React, { Component } from 'react';
import SongIndexItem from '../songs/song_index_item';

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
  }

  handleChange(e) {
    const newSongs = this.props.songs.filter(song => 
        song.songName.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
    this.setState({songs: newSongs})
  }

  render() {
    const { updateCurrentSong, getAllAlbums } = this.props
    const { songs } = this.state
    return songs ? (
      <div>
        <h1 className="search-txt">Search</h1>
        <input type="text" onChange={this.handleChange}/>
        <ul>
          {songs.map((song, i )=> 
          <SongIndexItem url={song.url} song={song} id={i}
                                updateCurrentSong={updateCurrentSong}
                                getAllAlbums={getAllAlbums}/>)}
        </ul>
      </div>
    ) : null;
  }
}

export default Search;