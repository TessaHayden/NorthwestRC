import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div>
    <p
      className="p__cormorant"
      style={{ fontSize: "2.6em" }}
    >
      {title}
    </p>
    <img
      src={images.arrow}
      alt="arrow_image"
      className="arrow__img"
      width="225"
      height="90"
    />
  </div>
);

export default SubHeading;
