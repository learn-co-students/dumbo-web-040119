class Brand < ActiveRecord::Base
  belongs_to :manufacturer
  has_many :cars

  def make_and_model
    "#{ self.manufacturer.name } #{ self.name }"
  end


end