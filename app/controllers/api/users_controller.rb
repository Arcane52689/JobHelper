class Api::UsersController < ApplicationController



  def show
    @profile = current_user.profiles.first
    @blurbs = current_user.blurbs
    :show
  end



end
