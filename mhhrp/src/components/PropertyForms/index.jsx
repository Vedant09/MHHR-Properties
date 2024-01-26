import React, { useState } from 'react';
import OutlinedButton from '../common/Button';

const PropertyForm = () => {
  const [propertyData, setPropertyData] = useState({
    images: [],
    name: '',
    address: '',
    description: '',
    bathrooms: '',
    beds: '',
    price: '',
    utilities: [],
    amenities: [],
  });

  const[tempUtilities,setTempUtilities] = useState('')
  const[tempAmenities,settempAmenities] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    setPropertyData((prevData) => ({ ...prevData, images: files }));
  };

  const handleAddUtility = (e) => {
    setPropertyData({
      ...propertyData,
      utilities:[...propertyData.utilities,tempUtilities]})
      setTempUtilities('')
  };


  const handleAmenitiesChange = (e) => {
    setPropertyData({
      ...propertyData,
      amenities:[...propertyData.amenities,tempAmenities]
    })
    settempAmenities('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Property Data:', propertyData);
  };

  return (
    <div className='property-forms-div'>
      <div className="add-property-header">
        <p className="header">Add Property</p>
      </div>
      <form className='forms-div'>
        <input
          type="text"
          placeholder='Name of the Property'
          className="input-field"
          name="name" v
          alue={propertyData.name}
          onChange={handleInputChange} />
        <br />
        <input
          type="text"
          placeholder='Address'
          className="input-field"
          name="address"
          value={propertyData.address}
          onChange={handleInputChange} />
        <br />
        <textarea
          name="description"
          placeholder='Description'
          className="input-field textarea"
          value={propertyData.description}
          onChange={handleInputChange} />
        <br />
        <input
          type="number"
          placeholder='Bathrooms'
          className="input-field"
          name="bathrooms"
          value={propertyData.bathrooms}
          onChange={handleInputChange} />
        <br />
        <input
          type="number"
          placeholder='Beds'
          className="input-field"
          name="beds"
          value={propertyData.beds}
          onChange={handleInputChange} />
        <br />
        <input
          type="number"
          placeholder='Price'
          className="input-field"
          name="price"
          value={propertyData.price}
          onChange={handleInputChange} />
        <br />

        <input
          type="text"
          placeholder='Add Utilities'
          className="input-field"
          value={tempUtilities}
          onChange = { (e) => setTempUtilities(e.target.value)}
        />
        <button type="button" onClick={handleAddUtility}>
          Add
        </button>
        <ul>
          {propertyData.utilities.map((utility, index) => (
            <li key={index}>{utility}</li>
          ))}
        </ul>


        <input
          type="text"
          placeholder='Add Amenities'
          className="input-field"
          value={tempAmenities}
          onChange={(e)=>settempAmenities(e.target.value)}
        />
        <button type="button" onClick={handleAmenitiesChange}>
          Add
        </button>
        <ul>
          {propertyData.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <label>
          Images : <br />
          <input type="file" multiple onChange={handleImageUpload} />
        </label>
        <br />
        <div className='submit-button-container'>
          <OutlinedButton onClick={handleSubmit} btnTitle='Submit' className='submit-button' />
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
