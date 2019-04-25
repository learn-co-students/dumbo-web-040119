class Manufacturer < ActiveRecord::Base
  has_many :brands
  has_many :cars, through: :brands

end