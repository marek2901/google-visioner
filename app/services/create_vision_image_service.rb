# frozen_string_literal: true

require 'google/cloud/vision'

class CreateVisionImageService
  attr_reader :file, :title

  def initialize(params)
    @file = params[:file]
    @title = params[:title]
  end

  def call
    image = VisionImage.create(title: title, file: file)
    g_vision = Google::Cloud::Vision.new
    vis_image = g_vision.image image.file.path
  end
end
