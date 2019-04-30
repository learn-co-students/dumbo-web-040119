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
    @dino = Dinosaur.new(dinosaur_params)
    if @dino.save
      redirect_to @dino
    else
      render :new
    end
  end

  def update
    if @dino.update(dinosaur_params)
      redirect_to @dino
    else
      render :edit
    end
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
