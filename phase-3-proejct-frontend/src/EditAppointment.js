import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditAppointment({ golfPros, onHandlePatch }) {

  const navigate = useNavigate();
  const { id } = useParams();

  const [editedAppointment, setEditedAppointment] = useState({
    time: "",
    golfpro_id: ""
  });

  useEffect(() => {
    fetch(`http://localhost:9292/appointments/${id}`)
      .then((response) => response.json())
      .then((data) => setEditedAppointment(data));
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "golfPro") {
      setEditedAppointment((prevState) => ({
        ...prevState,
        golfpro_id: parseInt(value)
      }));
    } else {
      setEditedAppointment((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
    console.log(editedAppointment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:9292/appointments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAppointment)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        onHandlePatch(data)
        navigate("/appointments");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (Object.keys(editedAppointment).length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>Edit Appointment</h1>
        {editedAppointment.client && <h2>{editedAppointment.client.name}</h2>}
        <form onSubmit={handleSubmit}>
          <label>
            Time:
            <input
              type="text"
              name="time"
              value={editedAppointment.time}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Golf Pro:
            <select name="golfPro" onChange={handleInputChange}>
              <option value="">Select a golf pro</option>
              {golfPros.map((golfpro) => (
                <option key={golfpro.id} value={golfpro.id}>
                  {golfpro.name} in {golfpro.location.name}
                </option>
              ))}
            </select>
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditAppointment;