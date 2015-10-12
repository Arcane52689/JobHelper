class AddNameToProfile < ActiveRecord::Migration
  def change
    add_column :profiles, :name, :string, default: "Coding"
  end

end
