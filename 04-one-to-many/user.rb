require_relative 'tweet'

class User

  attr_reader :username
  # def username
  #   @username
  # end

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message)
  end

end