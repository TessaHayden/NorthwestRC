import React, { useState } from "react";
import { data } from "../../constants/index";
import "./gallery.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="panels">
      {data.restaurants.map((restaurants, index) => (
        <div
          className={`panel panel${index} ${
            isOpen === index ? "open open-active" : ""
          }`}
          onClick={() => setIsOpen(index)}
        >
          <div>
            <p>{restaurants.description}</p>
          </div>
          <div>
            <p>{restaurants.name}</p>
          </div>
          <div>
            <p>
              Visit<a href={restaurants.website}>{restaurants.name}</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
