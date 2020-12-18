@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name
    json.albums artist.albums
  end
end
