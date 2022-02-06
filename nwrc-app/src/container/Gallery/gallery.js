import React, { useState } from "react";

import { Panels } from "../../components/index";
import { data } from "../../constants/index";
import "./gallery.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
    
  return (
    <div className='panels' onClick={toggleOpen}>
      {data.restaurants.map((restaurant, index) => (
        <div className={`panel panel${index} ${isOpen ? 'open open-active' : ''}`}>
          <Panels
            key={index}
            name={restaurant.name}
            description={restaurant.description}
            website={restaurant.website}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
