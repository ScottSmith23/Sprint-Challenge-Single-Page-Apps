import React from "react";

export default function LocationCard(props) {
  return( 
    <div className="location-card">
    <h3>Name: {props.location.name}</h3>
    <p>Type: {props.location.type}</p>
    <p>Dimension {props.location.dimension}</p>

  </div>
  )}
