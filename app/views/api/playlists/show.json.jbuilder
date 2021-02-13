json.songs do
  @playlist.playlist_songs.each_with_index do |psong, idx|
    json.set! psong.song.id do
      json.extract! psong.song, :id, :album_id, :song_name, :duration
      json.url url_for(psong.song.song_file)
      json.song_number idx + 1
    end
  end
end

json.albums do
  @playlist.albums.uniq.each do |album|
    json.set! album.id do
      json.extract! album, :id, :album_name, :artist_id
      json.imgUrl url_for(album.photo)
    end
  end
end

json.artists do
  @playlist.artists.uniq.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name
    end
  end
end