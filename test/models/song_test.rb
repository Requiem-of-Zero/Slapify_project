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
require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
