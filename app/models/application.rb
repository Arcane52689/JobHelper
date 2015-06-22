class Application < ActiveRecord::Base
  belongs_to :user
  belongs_to :company
  belongs_to :cover_letter
end
