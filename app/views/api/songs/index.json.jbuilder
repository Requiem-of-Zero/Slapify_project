@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :album_id, :song_name
    json.url url_for(song.song)
  end
end
