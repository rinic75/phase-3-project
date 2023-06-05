class LocationsController < ApplicationController
  get '/locations' do
    locations = Location.all
    locations.to_json(include: [:golfpros])
  end

  post '/locations' do
    Location.create(
      name: params[:name],
      address: params[:address],
      phone: params[:phone]
    ).to_json
  end
end