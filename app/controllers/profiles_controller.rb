class ProfilesController < ApplicationController

  def new
  end


  def show
    @profile = Profile.find(params[:id])
  end

  def create
    @profile = current_user.profile.new(profile_params)
    @profile.save!
    redirect_to root_url
  end

  def update

  end


  def profile_params
    params.require(:profile).permit(:cover_letter_template)
  end

end
