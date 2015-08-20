json.extract! application, :id, :company_id, :cover_letter_id, :user_id, :job_url, :status, :history

json.company_name
  application.company.name
end
