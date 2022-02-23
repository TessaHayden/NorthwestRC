import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './header.css';

function Header() {
    return (
      <div className="app__header app__bg app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title="Northwest Restaurant Consultant" />
          <h1 className="app__header-h1">Bill Hayden</h1>
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            {" "}
            Bill Hayden has served the Pacific NorthWest for over 20 years as a
            restaurant consultant &amp; owner. Over 300 restaurants and
            businesses have utilized Bill's expertise and skills to: improve
            customer satisfaction, train employees, increase profits and reduce
            losses.
          </p>
        </div>
            <div className="app__wrapper_img">
                <img src={images.defuegoRestaurantWhiskey} alt="header_img" />
            </div>    
      </div>
    );
}

export default Header;