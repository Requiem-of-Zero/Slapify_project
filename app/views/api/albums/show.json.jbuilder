json.album do
  json.extract! @album, :id, :album_name, :year, :artist_id
end

json.songs do 
  @album.songs.each do |song|
    json.set! song.id do 
      json.extract! song, :id, :album_id, :song_name
      json.url url_for(song.song)
    end
  end
end