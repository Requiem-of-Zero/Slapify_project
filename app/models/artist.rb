class Artist < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :albums,
    foreign_key: :artist_id,
    class_name: :Album

  has_many :artist_music,
    through: :music,
    source: :album
end
