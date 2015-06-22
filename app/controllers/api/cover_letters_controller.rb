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
      render json: @letter.errors.full_messages, status: 422
    end
  end

  def update
    @letter = current_user.cover_letters.find(params[:id])
    if @leter.update(cover_letter_params)
      render json: @letter
    else
      render json: @letter.errors.full_messages
    end
  end

  def destroy
    @letter = current_user.cover_letters.find(params[:id])
    @letter.destroy!
    render json: @letter, status: 200
  end


  def generate_pdf
    @letter = current_user.cover_letters.find(params[:id])



    if @letter && @letter.body
      client =   client = Pdfcrowd::Client.new("arcane52689", ENV["PDF_CROWD"])
      set_pdf_params(client)
      pdf = client.convertHtml(@letter.body)
      file = StringIO.new(pdf) #mimic a real upload file
      file.class.class_eval { attr_accessor :original_filename, :content_type } #add attr's that paperclip needs
      file.original_filename = "#{current_user.username}-letter-for-#{@letter.company.name}"
      file.content_type = "application/pdf"

      @letter.document = file
      file.close
      @letter.save
    else

    end
    render :show

  end



  def cover_letter_params
    params.require(:cover_letter).permit(:profile_id, :company_id, :blurb_id, :body)
  end

  def set_pdf_params(client)
    client.setPageWidth("8.5in")
    client.setPageHeight("11.5in")
    client.setPageMargins("1in", "1in", "1in", "1in")
  end


end
