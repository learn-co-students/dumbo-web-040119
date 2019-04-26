class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :fluffiness
      t.timestamps
    end
  end
end
