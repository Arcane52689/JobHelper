class ChangeDefaultToApplied < ActiveRecord::Migration
  def change
    change_column_default :applications, :status, "applied"
  end
end
