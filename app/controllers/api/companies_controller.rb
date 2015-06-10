class Api::CompaniesController < ApplicationController

  def create
    @company = Company.new(company_params)
    if @company.save
      render json: @company
    else
      render json: { errors: @company.errors.full_messages }
    end

  end

  def show
    @company = Company.find(params[:id])
    :show
  end

  def destroy
    @company = Company.find(params[:id]);
    @company.destroy!
    render json: @company
  end

  def index
    @companies = Company.all.order(:name)
    # fail
  end



  def company_params
    params.require(:company).permit(:name, :website, :jobs_site, :contact)
  end



end
