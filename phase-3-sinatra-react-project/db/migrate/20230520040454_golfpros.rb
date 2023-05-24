class Golfpros < ActiveRecord::Migration[6.1]
  def change
    create_table :golfpros do |t|
      t.string :name
      t.string :email
      t.integer :phone
      t.integer :location_id
    end
  end
end
