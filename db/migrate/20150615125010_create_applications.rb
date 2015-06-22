class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
      t.references :user, index: true, foreign_key: true
      t.references :company, index: true, foreign_key: true
      t.references :cover_letter, index: true, foreign_key: true
      t.string :job_url

      t.timestamps null: false
    end
  end
end
