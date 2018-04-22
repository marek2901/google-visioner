if Rails.env.production?
  require 'carrierwave/storage/fog'
  CarrierWave.configure do |config|
    config.storage = :fog
    config.fog_provider = 'fog/aws'
    config.fog_use_ssl_for_aws = true
    config.fog_directory  = ENV['S3_BUCKET_NAME']
    config.fog_public     = true
    config.fog_attributes = { 'Cache-Control': 'max-age=315576000' }
    config.asset_host = 'https://s3-eu-west-1.amazonaws.com/google-visioner-images'
    config.cache_dir = "#{Rails.root}/tmp/uploads"

    config.fog_credentials = {
      provider:               'AWS',
      aws_access_key_id:      ENV['S3_KEY'],
      aws_secret_access_key:  ENV['S3_SECRET'],
      region: ENV['S3_REGION']
    }
  end
end
