# frozen_string_literal: true

class BaseApi < Grape::API
  version 'v1', using: :header, vendor: 'twitter'
  format :json
  formatter :json, (lambda do |object, env|
    env['api.endpoint']
      .options.dig(:route_options, :serializer)
      .new(object)
      .serialized_json
  end)

  resource :images do
    mount Images::Base
  end
end
