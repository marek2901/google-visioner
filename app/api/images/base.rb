# frozen_string_literal: true

class Images::Base < Grape::API
  get '/' do
    [{ image: 'xddd' }]
  end
end
