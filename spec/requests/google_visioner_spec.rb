# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Widget management', type: :request do
  context 'images' do
    before(:each) do
      get '/api/images'
    end
    it 'returns list of images' do
      expect(json[0]['image']).to eq 'xddd'
    end
  end
end
