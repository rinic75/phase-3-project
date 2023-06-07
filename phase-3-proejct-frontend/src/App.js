import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"; // Import the CSS file
import Header from "./Header";
import Location from "./Location";
import AddGolfPro from "./AddGolfPro";
import AddLocation from "./AddLocation";
import EditGolfPro from "./EditGolfPro";
import Register from './Register';
import EditAppointment from './EditAppointment';
import Appointment from './Appointment';

const App = () => {
  const [locations, setLocations] = React.useState([]);
  const [golfPros, setGolfPros] = React.useState([]);
  const [appointments, setAppointments] = React.useState([]);
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:9292/locations")
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:9292/golfpros")
      .then((response) => response.json())
      .then((data) => setGolfPros(data));
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:9292/appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data));
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:9292/clients")
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  function handleDelete(id) {
    
    const updatedAppointments = appointments.filter(appointment => appointment.id !== parseInt(id))
    setAppointments(updatedAppointments)
  }

  function handleSubmit(newClient) {
    setClients([...clients, newClient])
  }

  function handlePatch(updatedAppointment) {
    const updatedAppointments = appointments.map(appointment => {
      if (appointment.id === updatedAppointment.id) {
        return updatedAppointment
      } else {
        return appointment
      }
    })
    setAppointments(updatedAppointments)
  }

  function onHandleLocationSubmit(newLocation) {
    setLocations([...locations, newLocation])
  }

  function onHandleGolfProSubmit(newGolfPro) {
    
    const newLocations = locations.map(location  => {
      if (location.id === newGolfPro.location_id) {
        location.golfpros.push(newGolfPro)
      }
      return location
    }
   )
   setLocations(newLocations)
  } 

  function onHandleGolfProEdit(editedGolfPro) {
    const updatedGolfPros = locations.map(location => {
      if (location.id === editedGolfPro.location_id) {
        const updatedGolfPros = location.golfpros.map(golfPro => {
          if (golfPro.id === editedGolfPro.id) {
            return editedGolfPro
          } else {
            return golfPro
          }
        })
        location.golfpros = updatedGolfPros
      }
      return location
    })
    setLocations(updatedGolfPros)
  }


  return (
    <div className="homepage">
      <h1>Welcome to the Golf School</h1>

      <Header />
        

      <Routes>
        <Route
          path="/locations"
          element={<Location locations={locations} />}
        />
        <Route
          exact
          path="/addgolfpro"
          element={<AddGolfPro locations={locations} onHandleGolfProSubmit={onHandleGolfProSubmit}/>}
        />
        <Route
          exact
          path="/editgolfpro/:id"
          element={<EditGolfPro locations={locations} onHandleGolfProEdit={onHandleGolfProEdit}/>}
        />
        <Route
          exact
          path="/addlocation" 
          element={<AddLocation onHandleLocationSubmit={onHandleLocationSubmit}/>}
        />
        <Route
          exact
          path="/register"
          element={
            <Register
              clients={clients}
              onHandleSubmit={handleSubmit}
            />
          }
        />
        <Route
          exact
          path="/appointments/:id"
          element={
            <EditAppointment golfPros={golfPros} onHandlePatch={handlePatch}/>
          }
        />
        <Route
          exact
          path="/appointments"
          element={
            <Appointment
              appointments={appointments}
              golfPros={golfPros}
              locations={locations}
              clients={clients}
              onHandleDelete={handleDelete}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
