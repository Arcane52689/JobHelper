json.extract! cover_letter, :id, :profile_id, :user_id, :blurb_id, :company_id, :body, :title

if cover_letter.document
  json.pdf asset_path cover_letter.document.url
end
