class SessionsController < ApplicationController


  def omniauth
    user = User.find_or_create_by_auth_hash(auth_hash)
    login!(user)
    redirect_to root_url
  end


  def destroy

  end


  def auth_hash
    request.env['omniauth.auth']
  end









end
