import React, { useState } from "react";
import { data } from "../../constants/index";
import "./gallery.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const restaurants = data.restaurants;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  const panels = restaurants.forEach(panel => panel.addEventListener('click', toggleOpen));

  return (
    <div className="panels" id="gallery">
      {restaurants.map((restaurants, index) => (
        <div className={`panel panel${index}`}>
          <p>{restaurants.description}</p>
          <p>{restaurants.name}</p>
          <p>visit: {restaurants.website}</p>
        </div>  
      ))}
    </div>  
  );
};

export default Gallery;
