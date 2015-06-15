class CoverLetter < ActiveRecord::Base
  belongs_to :company
  belongs_to :blurb
  belongs_to :profile
  belongs_to :user

  validates :company_id, :user_id, :profile_id, :blurb_id, presence: true

  has_attached_file :document
  validates_attachment :document, content_type: { content_type: "application/pdf"}

  before_save :ensure_title


  def ensure_title
    unless title
      self.title = "#{company.name}:  #{blurb.title}"
    end
  end
  

end
