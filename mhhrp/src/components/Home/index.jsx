import React from "react";
// import AboutUs from "../AboutUs/index";
import { HomeBackground } from "../../assets/images";
import Footer from "../Footer";
import OutlinedButton from "../common/Button";
import Information from "../Information";

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-background-container">
        <img
          className="background-image"
          src={HomeBackground}
          alt="background"
        />

        <div className="image-content-overlay">
          <div className="header">Find Your Dream Home</div>
          <div className="content">
            {" "}
            Secure and hassle-free property rentals{" "}
          </div>
          <OutlinedButton btnTitle="Contact Us" />
        </div>
      </div>

      <Information />
      
      <Footer />
    </div>
  );
};

export default Home;
