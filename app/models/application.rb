class Application < ActiveRecord::Base
  belongs_to :user
  belongs_to :company
  belongs_to :cover_letter
  has_one :profile, through: :cover_letter, as: :profile

  before_update :update_history

  def update_history
    if self.status_changed?
      line = "changed to #{self.status} @ #{Time.now.to_date.inspect} \n"
      self.history ||= ""
      self.history = self.history + line
    end
  end


end
