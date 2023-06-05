import React, { useState } from "react";

function AddGolfPro({ locations, onHandleGolfProSubmit }) {

  const [golfPro, setGolfPro] = useState({
    name: "",
    email: "",
    phone: "",
    location_id: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGolfPro((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9292/golfpros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(golfPro)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        onHandleGolfProSubmit(data);
      })
    // Reset form fields
    setGolfPro({
      name: "",
      email: "",
      phone: "",
      location_id: ""
    });
  };

  return (
    <section className="section">
      <h2>Add Golf Pro</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Enter name"
              value={golfPro.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Enter email"
              value={golfPro.email}
              onChange={handleChange}
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
              value={golfPro.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Location</label>
          <div className="control">
            <div className="select">
              <select
                name="location_id"
                value={golfPro.location_id}
                onChange={handleChange}
              >
                <option value="">Select location</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddGolfPro;
