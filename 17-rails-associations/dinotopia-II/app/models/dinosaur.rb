class Dinosaur < ApplicationRecord
  belongs_to :species
  belongs_to :museum
end
