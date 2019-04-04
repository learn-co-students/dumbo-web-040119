require 'pry'
require_relative 'tweet'
require_relative 'user'


coffee_dad = User.new("coffee_dad")
ariana_grande = User.new("ariana_grande")
p coffee_dad.username


coffee_dad.post_tweet "having coffee"
coffee_dad.post_tweet "drinking coffee"
apocalyptic_tweet = coffee_dad.post_tweet "The time of reckoning is upon us"
coffee_dad.post_tweet "#More coffee!"


ariana_grande.post_tweet "Thank u, next"
ariana_grande.post_tweet "Break up with your boyfriend, I'm bored"

p apocalyptic_tweet
p apocalyptic_tweet.author #user instance
p apocalyptic_tweet.username

binding.pry

false

