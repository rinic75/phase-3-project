class Appointment < ActiveRecord::Base
  belongs_to :golfpro
  belongs_to :client
end