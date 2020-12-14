class Song < ApplicationRecord
  validates :song_name, presence: true
  validates :album_id, presence: true

  has_one_attached :song

  belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album
end
