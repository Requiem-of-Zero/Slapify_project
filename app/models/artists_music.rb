class ArtistsMusic < ApplicationRecord
  belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :Artist
end
