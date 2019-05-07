class ApplicationController < ActionController::Base

  before_action :setup

  def get_notification
    flash["message"]
  end 

  def set_notification(message)
    flash["message"] = message
  end

  private

  def remaining_votes
    session["votes"]
  end

  def use_one_vote
    session["votes"] -= 1
  end

  def can_vote
    remaining_votes > 0
  end

  def setup
    session["votes"] ||= 5
    
    @remaining_votes = remaining_votes
    @can_vote = can_vote
    @notification = get_notification
  end

end