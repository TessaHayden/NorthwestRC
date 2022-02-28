import React from "react";
import { SubHeading } from '../../components';
import { images } from "../../constants";
import "./footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact</h1>
        <p className="p__opensans">
          <a
            role="button"
            className="btn btn-link a-link"
            href="tel:+15033497151"
          >
            Phone
          </a>
        </p>
        <p className="p__opensans">
          <a
            role="button"
            className="btn btn-link a-link"
            href="mailto:BillHayden@live.com"
          >
            Email
          </a>
        </p>
      </div>

      <div className="app__footer-links_logo">
        <a href="/" ><SubHeading title="Northwest Restaurant Consultant" />
        <img src={images.nwrcLogo} alt="footer_logo" width="80" height="80" /></a>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Hours Daily</h1>
        <p className="p__opensans">09:00 am - 08:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        &copy;2022 Northwest Restaurant Consultants. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
