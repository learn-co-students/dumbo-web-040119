class DinosaursController < ApplicationController

  # def index
  #   @dinosaurs = Dinosaur.all
  # end

  def show
    @dinosaur = Dinosaur.find(params[:id])
  end

  def new 
    @museums = Museum.all
    @dinosaur = Dinosaur.new
  end

  def create
    @dinosaur = Dinosaur.create(dinosaur_params)
    redirect_to @dinosaur
  end

  private

  def dinosaur_params
    params.require(:dinosaur).permit(:name, :species_id, :museum_id)
  end

end