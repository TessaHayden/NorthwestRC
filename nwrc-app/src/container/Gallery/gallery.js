import React, { useState } from "react";
import { data, images } from "../../constants/index";
import "./gallery.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Gallery = () => {
  const imageList = [
    images.defuegoRestaurant,
    images.defuegoRestaurantWhiskey,
    images.defuegofRestaurantPool,
    images.defuegoFood,
    images.defuegofFoodLunch,
    images.defuegoBrunch,
    images.defuegoFoodSalmon,
    images.defuegoDrink,
  ];
  const [current, setCurrent] = useState(0);
  const length = imageList.length;

  const restaurants = data.restaurants;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="app__wrapper_gallery">
      <div className="app__wrapper-subheading flex__center section__padding">
        <h1 className="headtext__cormorant">Gallery</h1>
        <img
          src={images.arrow}
          alt="about__arrow"
          className="arrow__img"
          width="350"
          height="100"
        />
      </div>
      <div className="panels" id="gallery">
        <FaChevronLeft className="left-arrow" onClick={prevSlide} />
        <FaChevronRight className="right-arrow" onClick={nextSlide} />
        {imageList.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && <img src={slide} alt="" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
