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
require 'test_helper'

class ArtistsMusicTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
