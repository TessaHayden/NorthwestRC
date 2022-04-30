import React from "react";
import { Calendar } from "../../components";
import { data, images } from "../../constants";
import './services.css'

const Services = () => (
  <div className="app__wrapper section__padding" id="services">
    <div className="app__wrapper_services flex__center section__padding">
      <div className="app__wrapper_subheading">
      <h1 className="headtext__cormorant">
        Services</h1>
      <img src={images.arrow} alt="about__arrow" width="350" height="50" />
      </div>
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
    <div className="app__wrapper_event">
      <img src={images.outsideEvent} alt="outside event" width="600" height="401"/>
    </div>
  </div>
);

export default Services;
