import React, { useState } from 'react';

const PropertyContent = () => {
  const [activeTab, setActiveTab] = useState('description'); // Initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='content-tabs'>
      {/* Tabs */}
      <div className='tabs'>
        <div className={`tab ${activeTab === 'description' ? 'active' : ''}`} onClick={() => handleTabClick('description')}>
          Description
        </div>
        <div className={`tab ${activeTab === 'utilities' ? 'active' : ''}`} onClick={() => handleTabClick('utilities')}>
          Utilities
        </div>
        <div className={`tab ${activeTab === 'appliances' ? 'active' : ''}`} onClick={() => handleTabClick('appliances')}>
          Appliances
        </div>
        <div className={`tab ${activeTab === 'features' ? 'active' : ''}`} onClick={() => handleTabClick('features')}>
          Features
        </div>
        <div className={`tab ${activeTab === 'amenities' ? 'active' : ''}`} onClick={() => handleTabClick('amenities')}>
          Amenities
        </div>
        <div className={`tab ${activeTab === 'other' ? 'active' : ''}`} onClick={() => handleTabClick('other')}>
          Other
        </div>
      </div>

      {/* Tab Content */}
      <div className='tab-content'>
        {activeTab === 'description' && (
          <div>
            <h1>Description Tab Content</h1>
            {/* Add your description content here */}
          </div>
        )}
        {activeTab === 'utilities' && (
          <div>
            <h1>Utilities Tab Content</h1>
            {/* Add your utilities content here */}
          </div>
        )}
        {activeTab === 'appliances' && (
          <div>
            <h1>Appliances Tab Content</h1>
            {/* Add your appliances content here */}
          </div>
        )}
        {activeTab === 'features' && (
          <div>
            <h1>Features Tab Content</h1>
            {/* Add your features content here */}
          </div>
        )}
        {activeTab === 'amenities' && (
          <div>
            <h1>Amenities Tab Content</h1>
            {/* Add your amenities content here */}
          </div>
        )}
        {activeTab === 'other' && (
          <div>
            <h1>Other Tab Content</h1>
            {/* Add your other content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyContent;
