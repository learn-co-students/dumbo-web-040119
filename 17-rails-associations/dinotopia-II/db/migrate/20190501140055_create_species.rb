class CreateSpecies < ActiveRecord::Migration[5.2]
  def change
    create_table :species do |t|
      t.string :name
      t.integer :ferociousness
      t.boolean :vegetarian

      t.timestamps
    end
  end
end
