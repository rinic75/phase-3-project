class GolfprosController < ApplicationController
  get '/golfpros' do
    golfpros = Golfpro.all
    golfpros.to_json(include: [:location])
  end

  post '/golfpros' do
    Golfpro.create(
      name: params[:name],
      email: params[:email],
      phone: params[:phone],
      location_id: params[:location_id]
    ).to_json
  end
end