class CreateVisionImages < ActiveRecord::Migration[5.2]
  def change
    create_table :vision_images do |t|
      t.jsonb :vision_props
      t.string :title

      t.timestamps
    end
  end
end
