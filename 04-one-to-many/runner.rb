require 'pry'
require_relative 'tweet'
require_relative 'user'


coffee_dad = User.new("coffee_dad")
p coffee_dad.username


coffee_dad.post_tweet "having coffee"
coffee_dad.post_tweet "drinking coffee"
coffee_dad.post_tweet "The time of reckoning is upon us"
coffee_dad.post_tweet "#More coffee!"


binding.pry

false

