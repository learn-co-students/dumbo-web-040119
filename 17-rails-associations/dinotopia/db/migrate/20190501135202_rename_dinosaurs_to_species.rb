class RenameDinosaursToSpecies < ActiveRecord::Migration[5.2]
  def self.up
    rename_table :dinosaurs, :species
  end

  def self.down
    rename_table :species, :dinosaurs
  end
end
