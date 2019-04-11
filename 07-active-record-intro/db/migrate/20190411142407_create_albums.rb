class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name
      t.integer :track_count
      t.datetime :release_date
      t.timestamps
    end
  end
end
