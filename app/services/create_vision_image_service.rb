# frozen_string_literal: true

require 'google/cloud/vision'

# This service needs to locate face bounds
# save it to model and create it with apropriate params provided
class CreateVisionImageService
  attr_reader :file, :title

  def initialize(params)
    @file = params[:file]
    @title = params[:title]
  end

  def call
    VisionImage.new(title: title, file: file).tap do |image|
      g_vision = Google::Cloud::Vision.new
      vis_image = g_vision.image image.file.path
      faces = vis_image.faces.map { |e| e.bounds.head.map(&:to_h) }
      image.update_attribute(:faces_array, faces)
    end.tap(&:save)
  end
end
