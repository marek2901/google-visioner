Rails.application.routes.draw do
  root to: 'spa_app#index'
  mount BaseApi => '/api'
end
