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
