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

  componentDidUpdate(prevProps) {
    if(this.props.songs !== prevProps.songs){
      this.setState({ songs: this.props.songs})
    }
  }

  handleQueue() {
    const { hoveredSongId, songs } = this.state;
    const { receiveQueue } = this.props;

    receiveQueue(songs)
  }

  handleChange(e) {
    const newSongs = this.props.songs.filter(song => 
        song.songName.toLowerCase().includes(e.target.value.toLowerCase())
      )
    this.setState({songs: newSongs})
  }

  render() {
    const { albums, artists, receiveSong, handleQueue } = this.props
    const { songs } = this.state
    return songs ? (
      <div className="search-wrapper">
        {console.log(songs)}
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
        <ul className="result-wrapper">
          {songs.map((song, i ) => 
            <SearchSongIndexItem 
              url={song.url} 
              song={song}
              key={song.id}
              songId={song.id}
              id={i}
              receiveSong={receiveSong}
              imgUrl={(albums[song.albumId]).imgUrl}
              albumName={(albums[song.albumId]).albumName}
              albumId={song.albumId}
              artists={artists}
              album={albums[song.albumId]}
              location='album'
              handleQueue={() => this.handleQueue()}
              />
            )}
        </ul>
      </div>
    ) : null;
  }
}

export default Search;