class Golfpro < ActiveRecord::Base
  belongs_to :location
  has_many :appointments
  has_many :clients, through: :appointments
end