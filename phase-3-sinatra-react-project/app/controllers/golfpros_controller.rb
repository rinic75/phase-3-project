class GolfprosController < ApplicationController
  get '/golfpros' do
    golfpros = Golfpro.all
    golfpros.to_json
  end

  get '/golfpros/:id' do
    golfpro = Golfpro.find(params[:id])
    golfpro.to_json
  end

  post '/golfpros' do
    Golfpro.create(
      name: params[:name],
      email: params[:email],
      phone: params[:phone],
      location_id: params[:location_id]
    ).to_json
  end

  patch '/golfpros/:id' do
    golfpro = Golfpro.find(params[:id])
    golfpro.update(
      name: params[:name],
      email: params[:email],
      phone: params[:phone],
      location_id: params[:location_id]
    )
    golfpro.to_json
  end
end