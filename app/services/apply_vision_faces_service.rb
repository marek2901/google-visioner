require 'mini_magick'

class ApplyVisionFacesService
  attr_reader :image_model
  def initialize(image_model)
    @image_model = image_model
  end

  def lines
    image_model.faces_array.map do |face|
      face.permutation(2).select do |a, b|
        a['x'] == b['x'] || b['y'] == a['y']
      end.map do |a, b|
        "#{a['x']},#{a['y']} #{b['x']},#{b['y']}"
      end
    end.flatten
  end

  def call
    magick_img = MiniMagick::Image.open(image_model.file.path)
    magick_img.combine_options do |c|
      # line x0,y0 x1,y1 ## 0 start line 1 end line
      c.fill 'green'
      c.strokewidth '3'
      lines.map do |line|
        c.draw "line #{line}"
      end
    end
    image_model.update_attribute(:vision_file, magick_img.tempfile)
  end
end
