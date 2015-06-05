class API::ProfilesController < ApplicationController


  def show
    @profile = Profile.find(params[:id])
  end

  def create
    @profile = current_user.profile.new(profile_params)
    if @profile.save
      render json: @profile, status: 200
    else
      render json: {errors: @profile.errors.full_messages}
  end

  def update

  end


  def profile_params
    params.require(:profile).permit(:cover_letter_template)
  end

end
