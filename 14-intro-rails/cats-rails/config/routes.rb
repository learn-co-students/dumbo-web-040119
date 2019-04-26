Rails.application.routes.draw do
  
  resources :dinosaurs, only: [:index, :show]
  # resources(:dinosaurs, { only: [:index, :show] })

  # get "/🦕🦕🦕", to: 'dinosaurs#index', as: "dinosaurs"
  # get "/dinosaurs/:id", to: 'dinosaurs#show', as: "dinosaur"
  # get "/dinosaurs/new", to: 'dinosaurs#new'
  # post "/dinosaurs", to: 'dinosaurs#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
