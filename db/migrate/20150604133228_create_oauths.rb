class CreateOauths < ActiveRecord::Migration
  def change
    create_table :oauths do |t|
      t.references :user, index: true, foreign_key: true
      t.string :uid
      t.string :provider

      t.timestamps null: false
    end

    add_index :oauths, :uid
  end
end
