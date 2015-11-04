Rails.application.routes.draw do
  root to: "static_pages#root"

  get "/auth/:provider/callback", to: "sessions#omniauth"
  get "/session/demo", to: "sessions#demo"
  resource :session, only: [:new, :destroy]
  resources :profiles, only: [:new, :create, :update, :show]
  namespace :api, defaults: { format: :json } do
    get "/cover_letters/:id/generate_pdf", to: "cover_letters#generate_pdf"
    resources :profiles, only: [:create, :show, :update, :index, :destroy]
    resources :cover_letters, only: [:create, :udpate, :show, :index, :destroy]
    resources :applications, only: [:create, :show, :update, :index,]
    resources :users, only: [:show]
    resources :blurbs, only: [:create, :destroy, :show, :index, :update]
    resources :companies, only: [:create, :update, :show, :index, :destroy]
  end
end
