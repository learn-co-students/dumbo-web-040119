class LoginController < ApplicationController

  def new
    @errors = flash[:errors]
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to colors_path
    else
      flash[:errors] = [ "User doesn't exist or invalid password" ]
      redirect_to new_login_path
    end
  end
  
end
