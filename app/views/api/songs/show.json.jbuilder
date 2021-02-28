json.extract! @song, :id, :album_id, :song_name
json.albumUrl url_for(@song.album.photo)
json.artistName song.album.artist.name
