class SessionsController < ApplicationController


  def omniauth
    user = User.find_or_create_by_auth_hash(auth_hash)
    login!(user)
    redirect_to root_url
  end


  def demo
    user = User.first
    login!(user)
    redirect_to root_url
  end

  def destroy
    @session = Session.find_by(token:session[:session_token])
    @session.destroy!
    session[:session_token] = nil
    @current_user = nil

    render json: {redirect_url: root_url}
  end


  def auth_hash
    request.env['omniauth.auth']
  end









end
