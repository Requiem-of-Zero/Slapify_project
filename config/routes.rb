Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]  
    resource :session, only: [:create, :destroy, :show]

    resources :albums, only: [:index, :show] do
      resources :songs, only: [:index, :show]
    end

    resources :songs, only: [:update, :index]
    resources :artists, only: [:show, :index]
  end
  
  root 'static_pages#root'

end
