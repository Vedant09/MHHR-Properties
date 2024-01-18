import React from "react";
import OutlinedButton from "../common/Button";

const ContactUs = () => {
  return (
    <div className="contact-us-component">
      <div className="contact-us-header">
        <p className="header">Contact Us</p>
      </div>
      <div className="info-container">
        <div className="form-container">
          <p className="header"> Drop us a line!</p>
          <input placeholder="Name" className="input-field"/>

          <input placeholder="Email*" className="input-field"/>

          <textarea placeholder="Message" className="input-field textarea"/>

          <OutlinedButton btnTitle="Send" className="button"/>
        </div>

        <div className="information-container">
          <div className="content-part">
            <div className="header"> Better yet, see us in person!</div>
            <div className="content">
              We love our customers, so feel free to visit during normal
              business hours.
            </div>
          </div>

          <div className="content-part">
            <div className="header">MHHR Properties</div>
            <div className="content">
              10815 N Fieldgrove Dr, Dunlap, Illinois 61525, United States
            </div>
            <div className="content">Ph: 3093398541</div>
          </div>

          <div className="content-part">
            <div className="header">Hours</div>
            <div className="content">Mon 09:00 am – 05:00 pm</div>
            <div className="content">Tue 09:00 am – 05:00 pm</div>
            <div className="content">Wed 09:00 am – 05:00 pm</div>
            <div className="content">Thu 09:00 am – 05:00 pm</div>
            <div className="content">Fri 09:00 am – 05:00 pm</div>
            <div className="content">Sat 09:00 am – 05:00 pm</div>
            <div className="content">Sun By Appointment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
