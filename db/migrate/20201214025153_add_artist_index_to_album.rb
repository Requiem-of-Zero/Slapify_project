class AddArtistIndexToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :artist_id, :integer, null: false
  end
end
