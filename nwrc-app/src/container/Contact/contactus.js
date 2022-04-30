import React, { useState } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./contactus.css";

const ContactUs = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { fname, lname, phone, email, message } = e.target.elements;
    let details = {
      firstname: fname.value,
      lastname: lname.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  
  return (
    <div className="app__bg section__padding flex__center" id="contact">
      <div className="app__wrapper_info">
        <div className="app__wrapper_subhead">
          <SubHeading className="subheading-contact" title="Contact" />
        </div>
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Send a message
        </h1>
        <div className="app__wrapper_content">
          <div className="content_img">
            <img src={images.violetta} width="430" height="330" />
          </div>
          <div className="p__cormorant content_label-input">
            <form onSubmit={handleSubmit}>
              <div className="content_label-name">
                <label htmlFor="firstname">First Name:</label>
                <input
                  type="text"
                  id="firstname"
                  aria-describedby="first name"
                  required
                />

                <label htmlFor="lastname">Last Name:</label>
                <input
                  type="text"
                  id="lastname"
                  aria-describedby="last name"
                  required
                />
              </div>
              <div className="phone-input">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  aria-describedby="phone number"
                  required
                />
              </div>
              <div className="email-input">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  aria-aria-describedby="email"
                  required
                />
              </div>

              <label htmlFor="message">Message:</label>
              <textarea
                type="text"
                id="message"
                rows="8"
                cols="40"
                aria-describedby="message"
                required
              />
            </form>
            <div className="btn-cls">
              <button type="submit">Submit</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
