import React, { useState } from "react";
import { TabsList } from "../../utils/properties";


const PropertyContent = ({ data }) => {
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
          {TabsList.description}
        </div>
        <div
          className={`tab ${activeTab === TabsList.utilities && "active"}`}
          onClick={() => handleTabClick(TabsList.utilities)}
        >
          {TabsList.utilities}
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
              {data.description}
            </p>
          </div>
        )}
        {activeTab === TabsList.utilities && (
          <div>
            <h1>Utilities Tab Content</h1>
            <span>
              <ul>
                {data.utilities.map((utility, index) => (
                  <li key={index}>
                    {utility}
                  </li>
                ))}
              </ul>
            </span>
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
                {data.amenities.map((amenity, index) => (
                  <li key={index}>
                    {amenity}
                  </li>
                ))}
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
