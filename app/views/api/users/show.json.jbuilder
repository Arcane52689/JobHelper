json.extract! current_user, :id, :username

if @profile
  json.profile do
    json.partial! "api/profiles/profile", profile: @profile
  end
end
