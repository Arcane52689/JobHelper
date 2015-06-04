class Session < ActiveRecord::Base
  belongs_to :user

  validates :token, presence: true, uniqueness: true
  before_save :ensure_unique_token








  def ensure_unique_token
    token = SecureRandom.urlsafe_base64
    until !Session.exists?(:token)
      token = SecureRandom.urlsafe_base64
    end
    self.token = token
  end


end
