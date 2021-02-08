# == Schema Information
#
# Table name: playlist_songs
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  playlist_id :integer          not null
#  song_id     :integer          not null
#
# Indexes
#
#  index_playlist_songs_on_playlist_id_and_song_id  (playlist_id,song_id) UNIQUE
#
class PlaylistSong < ApplicationRecord
  validates :playlist_id, :song_id, presence: true
  validates :song_id, uniqueness: { scope: :playlist_id}

  belongs_to :playlist,
    foreign_key: :playlist_id,
    class_name: :Playlist

  belongs_to :song,
    foreign_key: :song_id,
    class_name: :Song

end
