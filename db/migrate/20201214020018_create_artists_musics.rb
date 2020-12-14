class CreateArtistsMusics < ActiveRecord::Migration[5.2]
  def change
    create_table :artists_musics do |t|
      t.integer :album_id, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :artists_musics, :album_id
    add_index :artists_musics, :artist_id
  end
end
