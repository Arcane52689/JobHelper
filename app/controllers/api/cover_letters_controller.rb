class Api::CoverLettersController < ApplicationController

  def show
    @letter = CoverLetter.find(params[:id])
  end

  def index
    @letters = current_user.cover_letters
  end

  def create
    @letter = current_user.cover_letters.new(cover_letter_params)
    if @letter.save
      render json: @letter
    else
      render json: @letter.errors.full_messages
    end
  end

  def update
    @letter = current_user.cover_letters.find(params[:id])
    if @leter.update(cover_letter_params)
      render json: @letter
    else
      rendr json: @letter.erros.full_messages
    end
  end
  



  def cover_letter_params
    params.require(:cover_letter).permit(:profile_id, :company_id, :blurb_id)
  end

end
