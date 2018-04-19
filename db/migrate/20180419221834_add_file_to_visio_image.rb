class AddFileToVisioImage < ActiveRecord::Migration[5.2]
  def change
    add_column :vision_images, :file, :string
  end
end
