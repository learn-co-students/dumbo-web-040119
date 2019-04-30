class DinosaursController < ApplicationController

  before_action :get_dinosaur, only: [:show, :edit, :update]

  def index
    # redirect_to dinosaurs_path unless request.path == dinosaurs_path
    @dinos = Dinosaur.all
  end

  def new
    @dino = Dinosaur.new
  end

  def create
    @dino = Dinosaur.create(dinosaur_params)
    redirect_to @dino
  end

  def update
    @dino.update(dinosaur_params)
    redirect_to @dino
  end

  def destroy
    Dinosaur.destroy(params[:id])
    redirect_to dinosaurs_path
  end

  private

  def get_dinosaur
    @dino = Dinosaur.find(params[:id])
  end

  def dinosaur_params
    params.require(:dinosaur).permit(:name, :ferociousness, :vegetarian)
  end

end
