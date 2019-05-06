class CreateDinosaurs < ActiveRecord::Migration[5.2]
  def change
    create_table :dinosaurs do |t|
      t.string :name
      t.integer :ferociousness
      t.boolean :vegetarian

      t.timestamps
    end
  end
end
