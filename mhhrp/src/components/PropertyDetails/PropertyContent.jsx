import React, { useState } from "react";
import { TabsList } from "../../utils/properties";


const PropertyContent = () => {
  const [activeTab, setActiveTab] = useState(TabsList.description); // Initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="content-tabs">
      <div className="tabs">
        <div
          className={`tab ${activeTab === TabsList.description && "active"}`}
          onClick={() => handleTabClick(TabsList.description)}
        >
         { TabsList.description}
        </div>
        <div
          className={`tab ${activeTab === TabsList.utilities && "active"}`}
          onClick={() => handleTabClick(TabsList.utilities)}
        >
          {TabsList.utilities}
        </div>
        <div
          className={`tab ${activeTab === TabsList.appliances && "active"}`}
          onClick={() => handleTabClick(TabsList.appliances)}
        >
          {TabsList.appliances}
        </div>
        <div
          className={`tab ${activeTab === TabsList.features && "active"}`}
          onClick={() => handleTabClick(TabsList.features)}
        >
          {TabsList.features}
        </div>
        <div
          className={`tab ${activeTab === TabsList.amenities && "active"}`}
          onClick={() => handleTabClick(TabsList.amenities)}
        >
          {TabsList.amenities}
        </div>
        <div
          className={`tab ${activeTab === TabsList.others && "active"}`}
          onClick={() => handleTabClick(TabsList.others)}
        >
          {TabsList.others}
        </div>
      </div>

      <div className="tab-content">
        {activeTab === TabsList.description && (
          <div>
            <h1>Description Tab Content</h1>
            <p>
            BRAND NEW ADU!!! This custom built 1,200 sq ft 3 beds 2 bath stand-alone house is behind the main house on a very quiet street in a great neighborhood. It has 9-foot ceilings, a large living room, huge kitchen with brand new stove, dishwasher, and cabinets. 
            The dining space is next to the kitchen, as well as laundry hook-ups. 
            The house has waterproof laminate for easy maintanance, and brand new central AC/Heater unit. 
            Don't miss out on the opportunity to rent a beautiful & spacious home in Garden Grove!
            </p>
          </div>
        )}
        {activeTab === TabsList.utilities && (
          <div>
            <h1>Utilities Tab Content</h1>
            <span>
              <ul>
              <li><icon>Garbage</icon></li>
              <li><icon>Gas</icon></li>
              <li><icon>Water</icon></li>
              </ul>
            </span>
          </div>
        )}
        {activeTab === TabsList.appliances && (
          <div>
            <h1>Appliances Tab Content</h1>
            <p>
              <ul>
                <li>Kitchen Appliances</li>
                <li>Laundry Room</li>
                <li>Smart Thermostat</li>
                <li>Security System Integration</li>
                <li>Built-In Microwave</li>
              </ul>
            </p>
          </div>
        )}
        {activeTab === TabsList.features && (
          <div>
            <h1>Features Tab Content</h1>
            <p>
            <ul>
                <li>Spacious Living Areas</li>
                <li>Gourmet Kitchen</li>
                <li>Private Outdoor Oasis</li>
                <li>Luxurious Bedrooms</li>
              </ul>
            </p>
          </div>
        )}
        {activeTab === TabsList.amenities && (
          <div>
            <h1>Amenities Tab Content</h1>
            <p>
              <ul>
                <li>Private Outdoor Oasis with Patio</li>
                <li>Luxurious Bedrooms with Natural Light</li>
                <li>Smart Home Technology</li>
                <li>Energy-Efficient Appliances</li>
                <li>Spa-like Bathrooms</li>
                <li>Dedicated Home Office Space</li>
                <li>Ample Storage Solutions</li>
                <li>High-end Stainless Steel Kitchen Appliances</li>
                <li>Smart Thermostat</li>
                <li>Built-in Wine Cooler</li>
                <li>High-Efficiency Washer and Dryer</li>
                <li>Security System Integration</li>
              </ul>
            </p>
          </div>
        )}
        {activeTab === TabsList.others && (
          <div>
            <h1>Other Tab Content</h1>
            <p>
              Our maintenance team is available around the clock to handle any
              issues that may arise. We prioritize quick and efficient service
              to minimize any inconvenience to you or your tenants.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyContent;
