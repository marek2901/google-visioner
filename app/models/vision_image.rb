class VisionImage < ApplicationRecord
  mount_uploader :file, VisionImageUploader
end
