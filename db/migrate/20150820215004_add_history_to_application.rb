class AddHistoryToApplication < ActiveRecord::Migration
  def change
    add_column :applications, :history, :text
  end
end
