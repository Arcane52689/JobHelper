class Api::ApplicationsController < ApplicationController

  def create
    @application = current_user.applications.new(application_params)
    if @application.save
      render json: @applicaiton
    else
      render json: @application.errors.full_messages
    end
  end

  def update
    @application = current_user.applications.find(params[:id])
    if @application.update(application_params)
      render json: @applicaiton
    else
      render json: @application.errors.full_messages
    end
  end

  def show
    @application = current_user.applications.find(params[:id])
  end

  def index
    @applications = current_user.applications
  end




  def application_params
    params.require(:application).permit(:company_id, :cover_letter_id, :job_url)
  end


end
