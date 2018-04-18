# frozen_string_literal: true

class BaseApi < Grape::API
  version 'v1', using: :header, vendor: 'twitter'
  format :json

  resource :images do
    mount Images::Base
  end
end
