require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  # get "/" do
  #   # "Hello world"
  #   erb :welcome
  # end

  # get "/matt" do
  #   # "Hello world"
  #   erb :matt
  # end

  get "/cars" do
    @cars = Car.all
    erb :cars
  end


end
