class Application < ActiveRecord::Base
  belongs_to :user
  belongs_to :company
  belongs_to :cover_letter
  has_one :profile, through: :cover_letter, as: :profile

  before_update :update_history


  def self.total_rejected(user_id)
    Application.where(user_id: user_id).where("history LIKE '%rejected%'").count
  end

  def self.total_on_site(user_id)
    Application.where(user_id: user_id).where("history LIKE '%on_site%'").count
  end

  def self.total_phone_screened(user_id)
    Application.where(user_id: user_id).where("history LIKE '%phone_screened%'").count
  end

  def self.statistics_for(user_id)
    return {
      total: Application.where(user_id: user_id).count,
      rejected: self.total_rejected(user_id),
      phone_screened: self.total_phone_screened(user_id),
      on_site: self.total_on_site(user_id)
    }
  end

  def update_history
    if self.status_changed?
      line = "changed to #{self.status} @ #{Time.now.to_date.inspect} \n"
      self.history ||= ""
      self.history = self.history + line
    end
  end

  def company_name
    self.company.name
  end





end
