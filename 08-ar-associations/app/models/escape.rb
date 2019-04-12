class Escape < ActiveRecord::Base

  belongs_to :animal
  belongs_to :zoo
  # def animal
  #   Animal.find(self.animal_id)
  # end

end