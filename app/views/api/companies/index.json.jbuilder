json.companies do
  json.partial! "company", collection: @companies, as: :company
end

json.total_pages  @companies.total_pages
