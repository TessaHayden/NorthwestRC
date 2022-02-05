import React, { useState } from "react";

import { images } from "../../constants/index";
import './gallery.css';

function Gallery() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenActive, setIsOpenActive] = React.useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }
    
    if ('className' === 'open') {
        setIsOpenActive(!isOpenActive);
   }




  return (
    <div className="panels">
      <div
        className={`panel panel1 ${isOpen ? "open" : ""}`}
              onClick={handleIsOpen}
              id="1"
      >
        <p>Hello</p>
        <p>World</p>
        <p>!!!</p>
      </div>
      <div
        className={`panel panel2 ${isOpen ? "open" : ""}`}
              onClick={handleIsOpen}
              id="2"
      >
        <p>Hello</p>
        <p>World</p>
        <p>!!!</p>
      </div>
      <div
        className={`panel panel3 ${isOpen ? "open-active" : ""}`}
              onClick={handleIsOpen}
              id="3"
      >
        <p>Hello</p>
        <p>World</p>
        <p>!!!</p>
      </div>
      <div
        className={`panel panel4 ${isOpen ? "open-active" : ""}`}
              onClick={handleIsOpen}
              id="4"
      >
        <p>Hello</p>
        <p>World</p>
        <p>!!!</p>
      </div>
      <div
        className={`panel panel5 ${isOpen ? "open-active" : ""}`}
              onClick={handleIsOpen}
              id="5"
      >
        <p>Hello</p>
        <p>World</p>
        <p>!!!</p>
      </div>
      <div
        className={`panel panel6 ${isOpen ? "open-active" : ""}`}
              onClick={handleIsOpen}
              id="6"
      >
        <p>Hello</p>
        <p>World</p>
        <p>!!!</p>
      </div>
    </div>
  );
}

export default Gallery;
