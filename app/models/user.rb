class User < ActiveRecord::Base

  validates :username, presence: true, uniqueness: true

  has_many :oauths, dependent: :destroy
  has_many :sessions, dependent: :destroy
  has_many :profiles, dependent: :destroy

  has_many :blurbs, dependent: :destroy
  has_many :cover_letters, dependent: :destroy
  has_many :applications, dependent: :destroy

  def self.find_or_create_by_auth_hash(auth_hash)
    oauth = Oauth.find_by_auth_hash(auth_hash)
    return oauth.user if oauth
    User.create_by_auth_hash(auth_hash)
  end


  def self.create_by_auth_hash(auth_hash)
    user = User.new(username: auth_hash[:info][:nickname])
    user.save!
    user.oauths.create!({
      provider: auth_hash[:provider],
      uid: auth_hash[:uid]
    })
    user
  end

end
