class Api::BlurbsController < ApplicationController

  def create

    @blurb = current_user.blurbs.new(blurb_params)
    if @blurb.save
      render json: @blurb
    else
      render json: {errors: @blurb.errors.full_messages }, status: 422
    end
  end


  def index
    @blurbs = current_user.blurbs
  end

  def show
    @blurb = Blurb.find(params[:id])
  end

  def update
    @blurb = Blurb.find(params[:id])
    if @blurb.update(blurb_params)
      render json: @blurb
    else
      render json: {errors: @blurb.errors.full_messages }, status: 422
    end
  end


  def blurb_params
    return {} unless params[:blurb].length > 0
    params.require(:blurb).permit(:title, :body)
  end


end
