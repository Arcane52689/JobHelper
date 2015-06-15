json.extract! current_user, :id, :username

if @profile
  json.profile do
    json.partial! "api/profiles/profile", profile: @profile
  end
end

if @blurbs
  json.blurbs do
    json.partial! "api/blurbs/blurb", collection: @blurbs, as: :blurb
  end
end

if @cover_letters
  json.cover_letters do
    json.partial! "api/cover_letters/cover_letter", collection: @cover_letters, as: :cover_letter
  end
end

if @applications
  json.applications do
    json.partial! "api/applications/application", collection: @applications, as: :application
  end
end
