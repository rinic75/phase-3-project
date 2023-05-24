import React from "react";
import { useNavigate } from "react-router-dom";

function Appointment({
  appointments,
  golfPros,
  clients,
  onHandleDelete,
}) {
  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.stopPropagation();
    navigate(`/appointments/${event.target.value}`);
  };

  const handleDelete = (event) => {
    const appointmentId = event.target.value;
    fetch(`http://localhost:9292/appointments/${appointmentId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Appointment deleted successfully");
        } else {
          console.error("Failed to delete appointment");
        }
      })
      .then(() => {
        onHandleDelete(appointmentId);
      })
      .catch((error) => {
        console.error(
          "An error occurred while deleting the appointment",
          error
        );
      });
  };

  if (Object.keys(appointments).length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section className="section">
        <h2>Appointment Schedule</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Golf Pro</th>
              <th>Client</th>
              <th>Phone Number</th>
              <th>Comment</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => {
              const golfPro = golfPros.find((pro) => pro.id === appointment.golfpro_id);
              const client = clients.find((client) => client.id === appointment.client_id);

              if (!golfPro || !client) {
                return null; // Skip rendering if golfPro or client is not found
              }

              return (
                <tr key={appointment.id}>
                  <td>{appointment.time}</td>
                  <td>{golfPro.name}</td>
                  <td>{client.name}</td>
                  <td>{client.phone}</td>
                  <td>{client.comment}</td>
                  <td>
                    <button
                      value={appointment.id}
                      className="edit"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                    <button
                      value={appointment.id}
                      className="delete"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Appointment;