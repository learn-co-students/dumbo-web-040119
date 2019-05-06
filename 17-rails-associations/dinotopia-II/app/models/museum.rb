class Museum < ApplicationRecord

  has_many :dinosaurs
  has_many :species, -> { distinct }, through: :dinosaurs
  # has_many :phyla, through: :species
  # has_many :kingdoms, through: :phyla

end
