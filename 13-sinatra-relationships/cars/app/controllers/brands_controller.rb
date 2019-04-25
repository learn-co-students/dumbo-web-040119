class BrandsController < ApplicationController

  get "/brands" do
    @brands = Brand.all
    erb :"brands/index"
  end

end
