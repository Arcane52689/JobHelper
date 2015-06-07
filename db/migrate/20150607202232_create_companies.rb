class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name, index: true, null: false
      t.string :website
      t.string :jobs_site
      t.string :contact

      t.timestamps null: false
    end
  end
end
