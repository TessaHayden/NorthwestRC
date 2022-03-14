import React, {useState} from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './contactus.css';

const ContactUs = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
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
      <div className="app__bg app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
          <SubHeading title="Contact" />
          <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
            Send a message
          </h1>
          <div className="app__wrapper-content">
            <p className="p__opensans">
              <a
                role="button"
                className="btn btn-link a-link"
                href="tel:+15033497151"
              >
                Call us today
              </a>
            </p>
          </div>
          <div className="app__wrapper_content-form">
            <form onSubmit={handleSubmit}>
              <div className="p__cormorant">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
              </div>
              <button type="submit">{status}</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ContactUs;