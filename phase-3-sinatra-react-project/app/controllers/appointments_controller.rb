class AppointmentsController < ApplicationController
  get '/appointments' do
    appointments = Appointment.all
    appointments.to_json(include: [:golfpro, :client])
  end

  get '/appointments/:id' do
    appointment = Appointment.find(params[:id])
    appointment.to_json(include: [:golfpro, :client])
  end
  
  delete '/appointments/:id' do
    appointment = Appointment.find(params[:id])
    appointment.destroy
    appointment.to_json
  end

  patch '/appointments/:id' do
    appointment = Appointment.find(params[:id])
    appointment.update(
      time: params[:time],
      golfpro_id: params[:golfpro_id])
    appointment.to_json
  end

  # post '/appointments' do
    # Client.create(
    #   name: params[:name],
    #   phone: params[:phone],
    #   comments: params[:comments]  
    # )

    # Appointment.create(
    #   date: params[:date],
    #   golfpro_id: params[:golfpro_id],
    #   client_id: params[:client_id]
    # )
   # end

end