import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditGolfPro({onHandleGolfProEdit}) {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id)
  
  const [golfPro, setGolfPro] = React.useState({
    name: "",
    email: "",
    phone: "",
    location_id: ""
  });

  React.useEffect(() => {
    fetch(`http://localhost:9292/golfpros/${id}`)
      .then((response) => response.json())
      .then((data) => setGolfPro(data));
  }, [id]);

 function handleChange(event) {
    const { name, value } = event.target;
    setGolfPro((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:9292/golfpros/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(golfPro),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        onHandleGolfProEdit(data);
        // Reset form fields
        setGolfPro({
          name: "",
          email: "",
          phone: "",
          location_id: "",
        });
      });
  }

  return(
    <div>
      <h1>Edit Golf Pro</h1>
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
            <input
              className="input"
              type="text"
              name="location_id"
              placeholder="Enter location"
              value={golfPro.location_id}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>

  )
}

export default EditGolfPro