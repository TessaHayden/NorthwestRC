import React from "react";

const Panels = ({ name, description, website}) => (
  
    <div >
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <a href={website}><p>Visit {name}</p></a>
      </div>
    </div>
 
);

export default Panels;
