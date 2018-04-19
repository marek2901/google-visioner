# frozen_string_literal: true

class BaseApi < Grape::API
  version 'v1', using: :header, vendor: 'images_api'
  format :json

  formatter :json, (lambda do |object, env|
    env['api.endpoint']
      .options.dig(:route_options, :serializer)
      .try(:new, object)
      .try(:serialized_json) || object.try(:to_json)
  end)

  resource :images do
    mount Images::Base
  end
end
