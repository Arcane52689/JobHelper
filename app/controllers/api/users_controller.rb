class Api::UsersController < ApplicationController



  def show
    @profile = current_user.profiles.first
    :show
  end



end
