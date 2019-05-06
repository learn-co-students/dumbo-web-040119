class Species < ApplicationRecord

  validates_presence_of :name, :ferociousness
  validates_uniqueness_of :name

  validates_numericality_of :ferociousness, {
    greater_than: 0,
    less_than_or_equal_to: 10,
    only_integer: true
  }

  validate :name_contains_saurus

  # validates :ferociousness, numericality: {
  #   greater_than: 0,
  #   less_than_or_equal_to: 10,
  #   only_integer: true
  # }

  # validates :ferociousness, inclusion: [1..10] #, message: "Must be 1-10"


  def name_contains_saurus
    unless name.include? "saurus"
      errors.add(:name, "must include -saurus")
    end
  end

end
