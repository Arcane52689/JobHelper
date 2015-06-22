class AddAttachmentDocumentToCoverLetters < ActiveRecord::Migration
  def self.up
    change_table :cover_letters do |t|
      t.attachment :document
    end
  end

  def self.down
    remove_attachment :cover_letters, :document
  end
end
