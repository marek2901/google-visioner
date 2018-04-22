# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Widget management', type: :request do
  context 'GET images' do
    before(:each) do
      10.times { FactoryBot.create(:vision_image, :with_file) }
      get '/api/images'
    end

    let(:data) { json['data'] }

    it 'returns list of all images' do
      expect(data.count).to eq 10
    end

    it 'returns list of all images' do
      expect(
        data[0]['attributes'].keys
      ).to match_array(%w[createdAt file labels title visionFile])
    end
  end

  context 'POST image' do
    let(:sample_params) do
      {
        file: fixture_file_upload('sample_image.png', 'image/png'),
        title: 'sample title'
      }
    end

    it 'cretes new image' do
      expect do
        post('/api/images', params: sample_params)
      end.to change { VisionImage.count }.by(1)
    end
  end

  context 'DELETE image' do
    let!(:image) { FactoryBot.create(:vision_image) }
    let!(:image_2) { FactoryBot.create(:vision_image) }

    it 'removes image' do
      expect(VisionImage.all).to include(image, image_2)

      delete("/api/images/#{image.id}")

      expect(VisionImage.all).not_to include(image)
      expect(VisionImage.all).to include(image_2)
    end
  end
end
