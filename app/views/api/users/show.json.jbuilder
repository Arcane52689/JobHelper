json.extract! current_user, :id, :username

json.profile do
  json.partial! "api/profiles/show", profile: @profile
end
