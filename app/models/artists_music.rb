# == Schema Information
#
# Table name: artists_musics
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  album_id   :integer          not null
#  artist_id  :integer          not null
#
# Indexes
#
#  index_artists_musics_on_album_id   (album_id)
#  index_artists_musics_on_artist_id  (artist_id)
#
class ArtistsMusic < ApplicationRecord
  belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :Artist
end
