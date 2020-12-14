@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :artist_id, :year, :album_name
    json.imgUrl url_for(album.photo)
  end
end
