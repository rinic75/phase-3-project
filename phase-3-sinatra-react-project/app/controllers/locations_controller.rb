class LocationsController < ApplicationController
  get '/locations' do
    locations = Location.all
    locations.to_json(include: [:golfpros])
  end
end