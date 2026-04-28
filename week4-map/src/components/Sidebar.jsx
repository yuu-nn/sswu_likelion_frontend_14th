import React from "react";
import "../assets/sass/sidebar.scss";

function Sidebar({ places, onSelect }) {
  return (
    <div className="sidebar">
      <h1 className="title">My Hot-place Map</h1>

      <div className="saved">
        <h3>Saved Places</h3>
      </div>

      <div className="list">
        {places.map((place, idx) => (
          <div
            key={idx}
            className="card"
            onClick={() => onSelect(place)}
          >
            <div className="icon"></div>

            <div className="info">
              <h3>{place.name}</h3>
              <p>{place.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;