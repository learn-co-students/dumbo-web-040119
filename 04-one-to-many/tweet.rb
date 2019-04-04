class Tweet

  attr_reader :message, :author

  @@all = []

  def initialize(message, author)
    @author = author
    @message = message
    @@all << self
  end

  def username
    self.author.username
  end

  def self.all
    @@all
  end


  # def user

  # end

  # def to_s
  #   "This is a tweet with the message of #{ self.message }"
  # end

end