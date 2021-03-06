import React from "react";
import "./aboutus.css";

import { images } from "../../constants";

function AboutUs() {
  return (
    <div className="app__wrapper_about flex__center section__padding" id="about">
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content-about">
          <h1 className="headtext__cormorant">About</h1>
          <img src={images.arrow} alt="about__arrow" className="arrow__img" />
          <div className="app__aboutus-overlay">
            <img src={images.blueprint} alt="blueprint__design" width="500" height="400"/>
          </div>
          <p className="p__opensans">
            For many, the dream of owning their own resaurant runs very deep. A
            unique concept, an ideal location, the perfected menu item or a
            sense of community calls to the heart and gives you passion.
            Sometimes though, certain details may be beyond the general scope of
            knowledge. Everything from blueprints, equipment, full menu
            development, employee training and more! Which is where your
            friendly Northwest Restaurant Consultant comes in to help prepare
            and navigate you on your journey.
          </p>
          <p className="p__opensans center_p" style={{margin: ".7rem"}}>
            When you've decided it's time to make your dreams a reality,
            <br />
            <a
              role="button"
              className="btn btn-link a-link"
              href="tel:+15033497151"
            >
              Call Bill Hayden
            </a>
          </p>
          <p className="p__cormorant" style={{textAlign: "center"}}>
            His passion and enthusiasm for your success will guide you through
            the process to success!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
