require 'pry'
require 'colorize'
require 'rest_client'
require 'json'

puts "Welcome to book searcher!".magenta
puts "What kind of books would you like to search for?".green

value_that_the_user_entered = gets.chomp

# search_term_with_pluses = value_that_the_user_entered.split(" ").join("+")
search_term_with_pluses = value_that_the_user_entered.gsub(" ", "+")

url = "https://www.googleapis.com/books/v1/volumes?q=#{ search_term_with_pluses }"

response = RestClient.get(url)

# p url

books_hash = JSON.parse response.body

# first_book_title = books_hash["items"].first["volumeInfo"]["title"]
book_titles = books_hash["items"].collect do |book_hash|
  book_hash["volumeInfo"]["title"]
end



book_titles.each do |title|
  puts title.blue
end

# puts book_titles.join("\n").yellow



# puts first_book_title


# binding.pry

# # 0