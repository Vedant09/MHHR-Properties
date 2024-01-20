import React, { useState } from 'react';

const PropertyForm = () => {
  const [propertyData, setPropertyData] = useState({
    images: [],
    name: '',
    address: '',
    description: '',
    bathrooms: 0,
    beds: 0,
    price: 0,
    utilities: [],
    amenities: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    setPropertyData((prevData) => ({ ...prevData, images: files }));
  };

  const handleUtilitiesChange = (e) => {
    const { value } = e.target;
    setPropertyData((prevData) => ({
      ...prevData,
      utilities: [...prevData.utilities, value],
    }));
  };

  const handleAmenitiesChange = (e) => {
    const { value } = e.target;
    setPropertyData((prevData) => ({
      ...prevData,
      amenities: [...prevData.amenities, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the data to the server
    console.log('Property Data:', propertyData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Images:
        <input type="file" multiple onChange={handleImageUpload} />
      </label>
      <br />
      <label>
        Name of the Property:
        <input type="text" name="name" value={propertyData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" name="address" value={propertyData.address} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={propertyData.description} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Bathrooms:
        <input type="number" name="bathrooms" value={propertyData.bathrooms} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Beds:
        <input type="number" name="beds" value={propertyData.beds} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={propertyData.price} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Add Utilities:
        <input type="text"  />
        <button type="button" onClick={handleUtilitiesChange}>
          Add
        </button>
        <ul>
          {propertyData.utilities.map((utility, index) => (
            <li key={index}>{utility}</li>
          ))}
        </ul>
      </label>
      <br />
      <label>
        Add Amenities:
        <input type="text" onChange={handleAmenitiesChange} />
        <button type="button" onClick={handleAmenitiesChange}>
          Add
        </button>
        <ul>
          {propertyData.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PropertyForm;
