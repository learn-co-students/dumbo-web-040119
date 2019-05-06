class CreateDinosaurs < ActiveRecord::Migration[5.2]
  def change
    create_table :dinosaurs do |t|
      t.string :name
      t.belongs_to :species, foreign_key: true
      t.belongs_to :museum, foreign_key: true

      t.timestamps
    end
  end
end
