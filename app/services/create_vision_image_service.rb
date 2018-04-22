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

  def map_labels(vis_image)
    vis_image.labels.map(&:description)
  end

  def map_faces(vis_image)
    vis_image.faces.map { |e| e.bounds.head.map(&:to_h) }
  end

  def call
    VisionImage.new(title: title, file: file).tap do |image|
      vis_image = Google::Cloud::Vision.new.image image.file.path
      image.update_attributes(
        faces_array: map_faces(vis_image),
        labels: map_labels(vis_image)
      )
    end.tap(&:save)
  end
end
