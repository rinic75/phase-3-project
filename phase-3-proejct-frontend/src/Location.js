import React from "react";

function Location({ locations }) {
  const locationBoxStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#f5f5f5",
  };

  return (
    <section className="section">
      <h2>Locations</h2>
      <ul className="list">
        {locations.map((location) => (
          <li key={location.id} style={locationBoxStyle}>
            <strong>{location.name}</strong>: {location.address}
            <br />
            <br />
            <ul>
              {location.golfpros.map((golfpro) => (
                <li key={golfpro.id}>{golfpro.name}</li>
              ))}
            </ul>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Location;

