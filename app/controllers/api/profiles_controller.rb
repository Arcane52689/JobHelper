class Api::ProfilesController < ApplicationController


  def show
    @profile = Profile.find(params[:id])
  end

  def create
    @profile = current_user.profiles.new(profile_params)
    if @profile.save
      render json: @profile, status: 200
    else
      render json: {errors: @profile.errors.full_messages}
    end
  end

  def update
    @profile = current_user.profiles.find(params[:id])

    if @profile.update(profile_params)
      render json: @profile, status: 200
    else
      render json: {errors: profile.errors.full_messages }
    end

  end


  def profile_params
    params.require(:profile).permit(:cover_letter_template, :github,:personal_site, :linkedin)
  end

end
