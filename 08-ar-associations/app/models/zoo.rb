class Zoo < ActiveRecord::Base

  has_many :escapes
  has_many :animals, :through => :escapes#, source: :escaped_animal
  # has_many :species, through: :animals

end