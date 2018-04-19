# frozen_string_literal: true

FactoryBot.define do
  factory :vision_image do
    vision_props do
      {
        joyLikelihood: 'UNLIKELY',
        sorrowLikelihood: 'VERY_UNLIKELY',
        angerLikelihood: 'VERY_UNLIKELY',
        surpriseLikelihood: 'VERY_UNLIKELY',
        underExposedLikelihood: 'VERY_UNLIKELY',
        blurredLikelihood: 'VERY_UNLIKELY',
        headwearLikelihood: 'VERY_LIKELY'
      }
    end
    sequence :title do |index|
      "VisionImage#{index}"
    end
  end
end
