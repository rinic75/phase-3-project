class ClientsController < ApplicationController
  get '/clients' do
    clients = Client.all
    clients.to_json
  end

  post '/clients' do
    Client.create(
      name: params[:name],
      phone: params[:phone],
      comment: params[:comment]
    ).to_json
  end
end