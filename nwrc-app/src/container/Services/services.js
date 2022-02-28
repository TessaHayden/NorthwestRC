import React from "react";
import { Calendar } from "../../components";
import { data, images } from "../../constants";
import './services.css'

const Services = () => (
  <div className="app__wrapper section__padding" id="services">
    <div className="app__wrapper_services flex__center section__padding">
      <h1 className="headtext__cormorant">
        Services</h1>
      <img src={images.arrow} alt="about__arrow" width="350" height="100" />
      <div className="app__wrapper-content">
        <p className="p__opensans">Services provided:</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          {data.services.map((services) => (
            <div>
              <p>{services.title}</p>
              <p>{services.description}</p>
            </div>
          ))}
        </p>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.outsideEvent} alt="outside event" />
    </div>
  </div>
);

export default Services;
