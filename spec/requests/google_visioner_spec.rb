# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Widget management', type: :request do
  context 'GET images' do
    before(:each) do
      10.times { FactoryBot.create(:vision_image) }
      get '/api/images'
    end

    let(:data) { json['data'] }

    it 'returns list of all images' do
      expect(data.count).to eq 10
    end

    it 'returns list of all images' do
      expect(
        data[0]['attributes'].keys
      ).to match_array(%w[visionProps title])
    end
  end

  context 'POST image' do
    it 'cretes new image' do
    end
  end
end
