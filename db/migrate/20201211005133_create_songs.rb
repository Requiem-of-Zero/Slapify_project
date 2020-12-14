class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :album_id, null: false
      t.string :song_name, null: false
      t.timestamps
    end
    add_index :songs, :album_id, unique: true
  end
end
