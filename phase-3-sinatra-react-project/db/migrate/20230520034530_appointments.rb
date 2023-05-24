class Appointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.datetime :time
      t.integer :golfpro_id
      t.integer :client_id
    end
  end
end
