import React from "react";
import InfoCard from "./InfoCard";

const Information = () => {
  return (
    <div className="information-container">
      <div className="header-container">
        <p className="header">
          FIND YOUR PERFECT RENTAL PROPERTY WITH MHHR PROPERTIES
        </p>
      </div>
      <div className="content-container">
        <InfoCard
          imageLink={
            "https://img1.wsimg.com/isteam/stock/kayaJdA/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:776,h:388,cg:true"
          }
          header={"Search Our Extensive Database"}
          content={
            "Our database is constantly updated with the latest rental properties. Use our search function to find the perfect rental that meets your needs."
          }
        />
        <InfoCard
          imageLink={
            "https://img1.wsimg.com/isteam/stock/6qj32Ve/:/cr=t:12.47%25,l:0%25,w:100%25,h:75.06%25/rs=w:776,h:388,cg:true"
          }
          header={"Expert Property Management"}
          content={
            "Our experienced property management team will take care of everything, from tenant screening to maintenance and repairs. You can trust us to manage your property with the utmost care."
          }
        />
        <InfoCard
          imageLink={
            "https://img1.wsimg.com/isteam/stock/1252/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:776,h:388,cg:true"
          }
          header={"Flexible Lease Terms"}
          content={
            "We offer flexible lease terms to fit your unique needs, whether you're looking for a short-term or long-term rental. Our team will work with you to find the best option for your situation."
          }
        />
        <InfoCard
          imageLink={
            "https://img1.wsimg.com/isteam/stock/87356/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388"
          }
          header={"Affordable Renting Options"}
          content={
            "We understand the importance of finding a rental property that fits your budget. That's why we offer a range of affordable options to choose from."
          }
        />
        <InfoCard
          imageLink={
            "https://img1.wsimg.com/isteam/stock/Ddjmo3B/:/rs=w:776,h:388,cg:true,m/cr=w:776,h:388"
          }
          header={"24/7 Maintenance Support"}
          content={
            "Our maintenance team is available around the clock to handle any issues that may arise. We prioritize quick and efficient service to minimize any inconvenience to you or your tenants."
          }
        />
        <InfoCard
          imageLink={
            "https://img1.wsimg.com/isteam/stock/kayaJdA/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:776,h:388,cg:true"
          }
          header={"Contact Us Today"}
          content={
            "If you have any questions or would like to learn more about our rental properties and property management services, don't hesitate to get in touch. Our team is always here to help."
          }
        />
      </div>
    </div>
  );
};

export default Information;
