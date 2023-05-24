class Client < ActiveRecord::Base
  has_many :appointments
  has_many :golfpros, through: :appointments
end