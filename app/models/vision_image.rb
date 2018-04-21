class VisionImage < ApplicationRecord
  mount_uploader :file, VisionImageUploader
  mount_uploader :vision_file, VisionProcessedImageUploader
end
