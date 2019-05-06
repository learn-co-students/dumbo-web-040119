class SpeciesController < ApplicationController
  before_action :set_species, only: [:show, :edit, :update, :destroy]

  def index
    @species = Species.all
  end


  def new
    # @phyla = Phylum.all
    @species = Species.new
  end

  def create
    @species = Species.new(species_params)
    if @species.save
      redirect_to @species
    else
      # @phyla = Phylum.all
      render :new
    end
  end

  def update
    if @species.update(species_params)
      redirect_to @species
    else
      render :edit
    end
  end


  def destroy
    @species.destroy
    redirect_to species_index_path
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_species
    @species = Species.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def species_params
    params.require(:species).permit(:name, :ferociousness, :vegetarian)
  end
end
