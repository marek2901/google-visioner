class AddLabelsToVisionImage < ActiveRecord::Migration[5.2]
  def change
    add_column :vision_images, :labels, :string, array: true, default: []
  end
end
