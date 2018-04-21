class AddVisionFileToVisionImage < ActiveRecord::Migration[5.2]
  def change
    add_column :vision_images, :vision_file, :string
  end
end
