Rails.application.routes.draw do
  root to: "static_pages#root"

  get "/auth/:provider/callback", to: "sessions#omniauth"
  resource :session, only: [:new, :destroy]
  resources :profiles, :new, :create, :update, :show
end
