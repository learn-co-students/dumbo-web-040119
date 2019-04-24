require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    redirect to "/cars"
  end

  get "/cars" do
    @cars = Car.all #.where(model: params[:q])
    erb :index
  end

  get "/cars/new" do
    erb :new
  end

  get "/cars/:id" do
    @car = Car.find(params[:id])
    erb :show
  end

  post '/cars' do
    @car = Car.create(params)
    # response.status_code = 302
    redirect to "/cars/#{ @car.id }"
  end




  # put "/cars/:id" do

  # end

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
