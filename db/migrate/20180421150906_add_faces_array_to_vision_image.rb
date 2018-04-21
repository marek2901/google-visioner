class AddFacesArrayToVisionImage < ActiveRecord::Migration[5.2]
  def change
    add_column :vision_images, :faces_array, :jsonb
  end
end
