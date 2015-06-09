class CoverLettersController < ApplicationController

  def show
    @letter = CoverLetter.find(params[:id])
  end

end
