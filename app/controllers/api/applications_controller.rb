class Api::ApplicationsController < ApplicationController

  def create
    @application = current_user.applications.new(application_params)
    if @application.save

      render json: @application
    else
      render json: {errors:  @application.errors.full_messages}, status:422
    end
  end

  def update
    @application = current_user.applications.find(params[:id])
    if @application.update(application_params)
      render json: @application
    else
      render json: {errors:  @application.errors.full_messages}, status:422
    end
  end

  def show
    @application = current_user.applications.includes(:company).find(params[:id])
  end

  def index
    @applications = current_user.applications.includes(:company)
  end

  def statistics
    @stats = Application.statistics_for(current_user.id)
    render json: @stats
  end



  def application_params
    params.require(:application).permit(:company_id, :cover_letter_id, :job_url, :title, :status, :job_title)
  end


end
