# frozen_string_literal: true

class Images::Base < Grape::API
  get '/', serializer: VisionImageSerializer do
    VisionImage.all
  end
end
