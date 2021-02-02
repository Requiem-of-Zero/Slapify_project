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

end
