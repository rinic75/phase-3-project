import React from "react";
import { useNavigate } from "react-router-dom";

function Location({ locations }) {
  const locationBoxStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#f5f5f5",
  };

  const navigate = useNavigate();

  function onHandleClick() {
    navigate("/addgolfpro");
  }

  function onHandleLocation() {
    navigate("/addlocation");
  }

  function onHandleEditClick(event) {
    event.stopPropagation();
    navigate(`/editgolfpro/${event.target.value}`);
  }

  return (
    <section className="section">
      <h2>Locations</h2>
      <ul className="list">
        {locations &&
          locations.map((location) => (
            <li key={location.id} style={locationBoxStyle}>
              <strong>{location.name}</strong>: {location.address}
              <br />
              <br />
              <ul>
                {location.golfpros.map((golfpro) => (
                  <li key={golfpro.id}>
                    {golfpro.name} / {golfpro.email} / {golfpro.phone}
                    <button
                      className="button"
                      value={golfpro.id}
                      onClick={onHandleEditClick}
                    >
                      Edit
                    </button>
                  </li>
                ))}
              </ul>
              <br />
              <br />
            </li>
          ))}
      </ul>
      <button className="button" onClick={onHandleLocation}>
        Add Location
      </button>
      <button className="button" onClick={onHandleClick}>
        Add Golf Pro
      </button>
    </section>
  );
}

export default Location;;
