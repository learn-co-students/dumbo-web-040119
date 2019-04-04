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
    Tweet.new(message, self)
  end

  def repent_last_tweet
    @tweets.pop 
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.author == self
    end
  end


end