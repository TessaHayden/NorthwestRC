import React, { useState } from "react";
import { data, images } from "../../constants/index";
import "./gallery.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Gallery = () => {
  const imageList = [
    images.defuegoRestaurant,
    images.defuegofRestaurantPool,
    images.defuegoFood,
    images.defuegofFoodLunch,
    images.defuegoBrunch,
    images.defuegoFoodSalmon,
    images.defuegoDrink,
    images.haydensRestaurant,
    images.haydensRestaurantLake,
    images.haydensRestaurantLittle,
    images.lechonRestaurant,
    images.lechonRestaurantOutside,
    images.lechonFoodBurger,
    images.lechonFoodOutside,
    images.shigezoRestaurantOutside,
    images.shigezoRestaurantInside,
    images.shigezoRestaurant,
    images.shigezoFoodSushi,
    images.shigezoFoodBeef,
    images.shigezoFoodIzakaya,
    images.southparkRestaurantBar,
    images.southparkRestaurantBarBottles,
    images.southparkRestaurant,
    images.southparkRestaurantSeafood,
    images.southparkFood,
    images.southparkFoodSpread,
    images.southparkFoodStew,
    images.southparkDrink,
    images.stonecliffRestaurant,
    images.stonecliffRestaurantPatio,
    images.stonecliffRestaurantBar,
    images.stonecliffRestaurantDiners,
    images.stonecliffRestaurantUpstairs,
    images.stonecliffFoodFish,
    images.stonecliffFoodPlate,
    images.stonecliffFoodDish,
    images.stonecliffFoodPasta,
    images.jellyfish,
    images.jellyfishBar,
    images.ernestosEvent,
    images.wineryEvent,
    images.champagne,
    images.peopleDining,
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
    <div
      className="app__wrapper_gallery flex__center section__padding"
      id="gallery"
    >
      <div className="app__wrapper_gallery flex__center section__padding">
        <div className="app__wrapper-subheading">
          <h1 className="headtext__cormorant">Gallery</h1>
          <img
            src={images.arrow}
            alt="about__arrow"
            className="arrow__img"
            width="350"
            height="50"
          />
        </div>
        <div className="panels" id="gallery">
          <div className="arrows">
            <FaChevronLeft className="arrow left-arrow" onClick={prevSlide} />
            <FaChevronRight className="arrow right-arrow" onClick={nextSlide} />
          </div>
          <div className="picture-slides">
            {imageList.map((slide, index) => {
              return (
                <div className="image-slide" key={index}>
                  {index === current && <img src={slide} alt="" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
