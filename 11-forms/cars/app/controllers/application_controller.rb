require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/cars" do
    @cars = Car.where(model: params[:q])
    erb :cars
  end

  get "/cars/:id" do
    @car = Car.find(params[:id])
    erb :show
  end

  # get '/cars/1' do
  #   @car = Car.find(1)
  #   erb :show
  # end

  # get "/cars/2" do
  #   @car = Car.find(2)
  #   erb :show
  # end

  # get "/cars/3" do
  #   @car = Car.find(3)
  #   erb :show
  # end


end
