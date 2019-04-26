class CreateLegs < ActiveRecord::Migration[5.2]
  def change
    create_table :legs do |t|
      t.integer :length
      t.belongs_to :dog, foreign_key: true

      t.timestamps
    end
  end
end
