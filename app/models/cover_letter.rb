class CoverLetter < ActiveRecord::Base
  belongs_to :company
  belongs_to :blurb
  belongs_to :profile
  belongs_to :user

  validates :company_id, :user_id, :profile_id, :blurb_id, presence: true

  def template
    profile.cover_letter_template
  end


  def generate_text
    template.gsub("[blurb]", blurb.body).gsub("[company name]", company.name)
  end



end
