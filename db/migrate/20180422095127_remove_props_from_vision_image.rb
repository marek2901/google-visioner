class RemovePropsFromVisionImage < ActiveRecord::Migration[5.2]
  def change
    remove_column :vision_images, :vision_props
  end
end
