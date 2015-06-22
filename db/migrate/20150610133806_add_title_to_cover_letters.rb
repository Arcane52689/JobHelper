class AddTitleToCoverLetters < ActiveRecord::Migration
  def change
    add_column :cover_letters, :title, :string
  end
end
