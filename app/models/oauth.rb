class Oauth < ActiveRecord::Base

  belongs_to :user

  validate :unique_provider_uid




  def self.find_by_auth_hash(auth_hash)
    Oauth.find_by({
      uid: auth_hash[:uid],
      provider: auth_hash[:provider]
      })
  end


  def unique_provider_uid
    if !Oauth.exists?({ uid: uid, provider: provider})
      errors[:provider] << "That account is already in use"
    end
  end

end
