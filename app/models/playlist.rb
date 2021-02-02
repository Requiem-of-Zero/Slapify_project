# == Schema Information
#
# Table name: playlists
#
#  id            :bigint           not null, primary key
#  playlist_name :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer          not null
#
# Indexes
#
#  index_playlists_on_user_id  (user_id)
#
class Playlist < ApplicationRecord 
  validates :user_id, :playlist_name, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
  
  has_many :playlist_songs,
    foreign_key: :playlist_id,
    class_name: :PlaylistSong

  has_many :songs,
    through: :playlist_songs,
    source: :song

  has_many :albums,
    through: :songs,
    source: :album

  has_many :artists, 
    through: :albums,
    source: :artist
end
