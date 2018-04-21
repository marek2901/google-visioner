class VisionProcessedImageUploader < CarrierWave::Uploader::Base
  def store_dir
    "uploads/#{model.class.to_s.underscore}_vision_processed/#{mounted_as}/#{model.id}"
  end
end
