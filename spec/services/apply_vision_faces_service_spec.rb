# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ApplyVisionFacesService, type: :service do
  let(:image) { FactoryBot.create(:vision_image, :with_file) }
  subject { ApplyVisionFacesService.new(image) }

  it 'creates vision image with face marked square' do
    subject.call
    expect(image.vision_file).not_to be_blank
  end

  describe '#lines' do
    it 'returns arrays of lines that creates square' do
      expect(subject.lines).to be_a(Array)
      subject.lines.each do |line|
        expect(line).to match(/\d{1,},\d{1,} \d{1,},\d{1,}/)

        # after uniq called always one element should be removed
        # if we are drawing a square like stroke we need to have
        # one element invisible
        expect(line.scan(/\d+/).map(&:to_i).uniq.count).to eq(3)
      end
    end
  end
end
