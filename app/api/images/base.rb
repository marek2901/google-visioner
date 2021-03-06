# frozen_string_literal: true

class Images::Base < Grape::API
  desc 'Get All Images'
  get '/', serializer: VisionImageSerializer do
    VisionImage.all
  end

  desc 'Create a Vision Image'
  params do
    requires :title, type: String, desc: 'Image Title'
    requires :file, type: File, desc: 'Image file (png)'
  end
  post '/' do
    ApplyVisionFacesService.new(
      CreateVisionImageService.new(params).call
    ).call
    { created: :ok }
  end

  desc 'Delete a Vision Image'
  params do
    requires :id, type: Integer, desc: 'Image to remove id'
  end
  delete ':id' do
    VisionImage.find(params[:id]).destroy
    { destroyed: :ok }
  end
end
