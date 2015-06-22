class CreateCoverLetters < ActiveRecord::Migration
  def change
    create_table :cover_letters do |t|
      t.references :company, index: true, foreign_key: true
      t.references :blurb, index: true, foreign_key: true
      t.references :profile, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
