# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  duration   :string
#  song_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  album_id   :integer          not null
#
# Indexes
#
#  index_songs_on_album_id  (album_id)
#
class Song < ApplicationRecord
  validates :song_name, presence: true
  validates :album_id, presence: true

  has_one_attached :song

  belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album
end
