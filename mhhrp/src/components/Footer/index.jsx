import React from "react";
import OutlinedButton from "../common/Button";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="mailing-list-container">
      <div className="header-text">Join Our Mailing List</div>
      <div className="content-text">Be the first to hear about new listings or how to list your property with us.</div>
      <div className="input-container">
        <input
        placeholder="Email"
        className="input-field"
        />
        <OutlinedButton btnTitle={"Sign up"} className="button"/>
      </div>
      </div>

      <div className="copyright-container">
      <div className="footer-text bold-text">MHHR Properties</div>
      <div className="footer-text copyright-text">Copyright © 2024 MHHR Properties - All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
