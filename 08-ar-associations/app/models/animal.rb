class Animal < ActiveRecord::Base
  
  has_many :escapes
  has_many :zoos, through: :escapes
  # belongs_to :speciess

  # def escapes
  #   Escape.where(animal_id: self.id)
  # end

end