class Api::BlurbsController < ApplicationController

  def create
    @blurb = current_user.blurbs.new(blurb_params)
    if @blurb.save
      render json: @blurb
    else
      render json: {errors: @blurb.errors.full_messages }
    end
  end


  def index
    @blurbs = current_user.blurbs
  end




  def blurb_params
    params.require(:blurb).permit(:title, :body)
  end


end
