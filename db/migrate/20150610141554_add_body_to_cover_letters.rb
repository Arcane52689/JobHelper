class AddBodyToCoverLetters < ActiveRecord::Migration
  def change
    add_column :cover_letters, :body, :text
  end
end
