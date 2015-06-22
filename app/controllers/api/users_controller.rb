class Api::UsersController < ApplicationController



  def show
    @profile = current_user.profiles.first
    @blurbs = current_user.blurbs
    @cover_letters = current_user.cover_letters
    @applications = current_user.applications
    :show
  end



end
