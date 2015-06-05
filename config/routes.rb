Rails.application.routes.draw do
  root to: "static_pages#root"

  get "/auth/:provider/callback", to: "sessions#omniauth"
  resource :session, only: [:new, :destroy]
  resources :profiles, only: [:new, :create, :update, :show]

  namespace :api, defaults: { format: :json } do
    resources :profiles, only: [:create, :show, :update]
    resources :users, only: [:show]
  end
end
