class AddJobTitleToApplication < ActiveRecord::Migration
  def change
    add_column :applications, :job_title, :string
  end
end
