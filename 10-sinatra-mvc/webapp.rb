require 'sinatra'

get '/' do
  'Hello word!'
end

get '/luka' do
  '🍩' * 10
end

get '/matt' do
  '🍣' * 100
end


