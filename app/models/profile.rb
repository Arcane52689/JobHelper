class Profile < ActiveRecord::Base
  belongs_to :user
  before_save :add_http

  LINKS = [
    :github,
    :personal_site,
    :linkedin
  ]

  def self.links
    LINKS
  end


  def add_http
    Profile.links.each do |link|
      unless self.send(link)[0..6] == "http://" || self.send(link)[0..7] == "https://"
        self.send(link.to_s + "=", "http://"+  self.send(link))
      end
    end
  end
end
