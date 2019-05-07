class User < ApplicationRecord

  validates_uniqueness_of :username

  def password=(value)
    # # byebug
    # p value
    # p "😻" * 100
    self.password_digest = BCrypt::Password.create(value)
  end

  def authenticate(value)
    BCrypt::Password.new(self.password_digest) == value
  end

  has_secure_password

end
