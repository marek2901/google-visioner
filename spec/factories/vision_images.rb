# frozen_string_literal: true

FactoryBot.define do
  factory :vision_image do
    trait :with_file do
      file do
        File.new(Rails.root.join('spec', 'fixtures', 'sample_image.png'))
      end

      faces_array do
        [ # ONE FACE on the foto
          [{ 'x' => 59, 'y' => 0 },
           { 'x' => 261, 'y' => 0 },
           { 'x' => 261, 'y' => 213 },
           { 'x' => 59, 'y' => 213 }]
        ]
      end

      labels do
        ['eyewear', 'hair', 'facial hair', 'beard', 'sunglasses', 'moustache']
      end
    end

    sequence :title do |index|
      "VisionImage#{index}"
    end
  end
end
