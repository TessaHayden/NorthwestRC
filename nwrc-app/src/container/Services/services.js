import React from "react";
import { Calendar, SubHeading } from "../../components";
import { data, images } from "../../constants";

const Services = () => (
  <div className="app__wrapper section__padding" id="services">
    <div className="app__wrapper_services">
      <SubHeading title="Services" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Services
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Here is a list of services provided:</p>
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
