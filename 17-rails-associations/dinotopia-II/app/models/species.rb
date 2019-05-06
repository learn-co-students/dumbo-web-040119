class Species < ApplicationRecord

  has_many :dinosaurs
  has_many :museums, through: :dinosaurs

  # belongs_to :phylum
  
end
