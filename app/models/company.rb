class Company < ActiveRecord::Base
  LINKS = [
    :website,
    :jobs_site
  ]


  validates :name, presence: true

  # before_save :add_http

  def self.links
    LINKS
  end

  def add_http
    Company.links.each do |link|
      unless self.send(link)[0..6] == "http://" || self.send(link)[0..7] == "https://"
        self.send(link.to_s + "=", "http://"+  self.send(link))
      end
    end
  end


end
