class GolfprosController < ApplicationController
  get '/golfpros' do
    golfpros = Golfpro.all
    golfpros.to_json(include: [:location])
  end
end