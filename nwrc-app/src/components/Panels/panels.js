import React from "react";

const Panels = ({ name, description, website }) => {
    return (
  <div className="panel_text">
    <p>{description}</p>
    <p>{name}</p>
    <a href={website}>
      <p>Visit {name}</p>
    </a>
  </div>
)};

export default Panels;
