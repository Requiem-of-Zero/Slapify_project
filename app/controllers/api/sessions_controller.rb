class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout!
      render '/api/users/show'
    else
      render json: ['Please sign in first'], status: 404
    end
  end
end
