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
        {activeTab === "description" && (
          <div>
            <h1>Description Tab Content</h1>
            {/* Add your description content here */}
          </div>
        )}
        {activeTab === "utilities" && (
          <div>
            <h1>Utilities Tab Content</h1>
            {/* Add your utilities content here */}
          </div>
        )}
        {activeTab === "appliances" && (
          <div>
            <h1>Appliances Tab Content</h1>
            {/* Add your appliances content here */}
          </div>
        )}
        {activeTab === "features" && (
          <div>
            <h1>Features Tab Content</h1>
            {/* Add your features content here */}
          </div>
        )}
        {activeTab === "amenities" && (
          <div>
            <h1>Amenities Tab Content</h1>
            {/* Add your amenities content here */}
          </div>
        )}
        {activeTab === "other" && (
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
