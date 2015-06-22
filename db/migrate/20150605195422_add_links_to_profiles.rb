class AddLinksToProfiles < ActiveRecord::Migration
  def change
    add_column :profiles, :linkedin, :string
    add_column :profiles, :github, :string
    add_column :profiles, :personal_site, :string

  end
end
