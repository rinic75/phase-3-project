import React from "react";
import { useNavigate } from "react-router-dom";

function AddLocation({ onHandleLocationSubmit }) {

  const navigate = useNavigate();

  function onHandleSubmit(e) {
    e.preventDefault();
    const newLocation = {
      name: e.target.name.value,
      address: e.target.address.value,
      phone: e.target.phone.value
    };
    fetch("http://localhost:9292/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocation),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        onHandleLocationSubmit(data);
      })
      
    // Reset form fields
    e.target.name.value = "";
    e.target.address.value = "";
    e.target.phone.value = "";
    navigate("/locations");
  }

  return(
    <section className="section">
      <h2>Add Location</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Enter name"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Address</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="address"
              placeholder="Enter address"
            />
          </div>
        </div>
  
        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="phone"
              placeholder="Enter phone"
            />
          </div>

        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Add Location</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddLocation;