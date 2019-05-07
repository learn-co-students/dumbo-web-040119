class VotesController < ApplicationController

  # skip_before_action :setup, only: [:create]

  def create
    if can_vote
      use_one_vote
      @vote = Vote.create(color_id: params[:color_id])
    else
      set_notification("You're out of votes 🖕")
    end
    redirect_to colors_path
  end

end

