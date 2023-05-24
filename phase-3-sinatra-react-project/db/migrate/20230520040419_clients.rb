class Clients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.integer :phone
      t.string :comment
    end
  end
end
