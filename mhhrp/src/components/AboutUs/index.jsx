import React from "react";
import InfoCard from "./InfoCard";

const index = () => {
  return (
    <div className="about-us-component">
      <InfoCard
        imageLink="https://img1.wsimg.com/isteam/stock/771/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
        header="Our History"
        content="Founded in 2015, MHHR Properties has been providing exceptional rental services to clients in the local area for over 5 years. We are proud to have helped hundreds of renters find their dream property and property owners maximize their rental income."
      />
      <InfoCard imageLink="https://img1.wsimg.com/isteam/stock/771/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
        header="Our Philosophy"
        content="At MHHR Properties, we believe that everyone deserves a great rental experience. That's why we are committed to providing our clients with exceptional service, honest advice, and expert guidance every step of the way."
      />
      <InfoCard imageLink="https://img1.wsimg.com/isteam/stock/771/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
        header="Our Technology"
        content="We use the latest technology to streamline the rental process and make it as easy as possible for renters and property owners alike. From online listings to digital lease signing, we are always looking for ways to improve the rental experience."
      />
    </div>
  );
};

export default index;
