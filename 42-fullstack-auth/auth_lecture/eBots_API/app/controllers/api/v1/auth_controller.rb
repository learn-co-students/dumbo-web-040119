class Api::V1::AuthController < ApplicationController
  def login
    # check if my params contain the entered username and password
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      render json: user
    else
      render json: {errors: "You dun goofed!"}
    end
  end
end