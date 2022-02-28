import React, { useState } from "react";
import { data, images } from "../../constants/index";
import "./gallery.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const restaurants = data.restaurants;
  console.log(restaurants);

  return (
    <div className="app__wrapper_gallery">
      <div className="app__wrapper-subheading flex__center section__padding">
        <h1 className="headtext__cormorant">Gallery</h1>
        <img src={images.arrow} alt="about__arrow" className="arrow__img" width="350" height="100"/> 
      </div>
      <div className="panels" id="gallery">
        {restaurants.map((restaurants, index) => (
          <div className={`panel panel${index} ${isOpen === index ? "open open-active" : ""}`}
          onClick={() => setIsOpen(index)}>
            <p>{restaurants.description}</p>
            <p>{restaurants.name}</p>
            <p>visit: <a href={restaurants.website}>{restaurants.name}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
