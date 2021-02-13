@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :album_id, :song_name, :duration
    json.url url_for(song.song_file)
  end
end
