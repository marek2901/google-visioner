# frozen_string_literal: true

require 'rails_helper'

RSpec.describe VisionImage, type: :model do
  subject { FactoryBot.create(:vision_image) }

  it 'contains proper attributes' do
    expect(subject.title).to be_a(String)
    expect(subject.vision_props).to be_a(Hash)
  end
end
