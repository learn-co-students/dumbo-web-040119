class DinosaursController < ApplicationController

  # get "/dinosaurs" do
  #   @dinos = Dinosaur.all
  #   erb :index
  # end

  def index
    @dinos = Dinosaur.all
  end

  def show
    @dino = Dinosaur.find(params[:id])
  end

end
