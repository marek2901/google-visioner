class VisionImageSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attributes :title, :labels, :created_at

  attribute :file do |object|
    object.try(:file).try(:url) || 'https://placekitten.com/400/300'
  end

  attribute :vision_file do |object|
    object.try(:vision_file).try(:url) || 'https://placekitten.com/400/300'
  end
end
