class CarsController < ApplicationController

  get "/cars" do
    if params[:q]
      matcher = "%#{params[:q]}%"
      @cars = Car.where("model like ? or make like ?", matcher, matcher)
    else
      @cars = Car.all
    end
    erb :"cars/index"
  end

  get "/cars/new" do
    get_brands_for_select
    @car = Car.new
    erb :"cars/new"
  end

  get "/cars/:id" do
    get_car
    erb :"cars/show"
  end

  post '/cars' do
    @car = Car.create(params[:car])
    # response.status_code = 302
    redirect to "/cars/#{ @car.id }"
  end

  get "/cars/:id/edit" do
    get_car
    get_brands_for_select
    erb :"cars/edit"
  end

  # params = {
  #   id: 5,
  #   _method: "PATCH",
  #   make: "For",
  #   model: "Bonco",
  #   year: 12
  # }

  # params = {
  #   id: 5,
  #   _method: "PATCH",
  #   car: {
  #     make: "For",
  #     model: "Bonco",
  #     year: 12
  #   }
  # }

  patch "/cars/:id" do
    get_car
    # params.delete("_method")
    @car.update(params[:car])
    redirect to "/cars/#{ @car.id }"
  end

  delete "/cars/:id" do
    Car.destroy(params[:id])
    redirect to "/cars"
  end


  def get_car
    @car = Car.find(params[:id])
  end

  def get_brands_for_select
    @brands = Brand.all
  end

end