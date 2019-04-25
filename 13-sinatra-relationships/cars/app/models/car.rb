class Car < ActiveRecord::Base
  belongs_to :brand
  has_one :manufacturer, through: :brand

  def make_and_model
    p brand_id
    "#{ self.manufacturer.name } #{ self.brand.name }"
  end

end