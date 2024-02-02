import React, { useState } from "react";
import OutlinedButton from "../common/Button";

const PropertyForm = () => {
  const [propertyData, setPropertyData] = useState({
    images: [],
    name: "",
    address: "",
    description: "",
    bathrooms: "",
    beds: "",
    price: "",
    utilities: [],
    amenities: [],
  });

  const [tempUtilities, setTempUtilities] = useState("");
  const [tempAmenities, setTempAmenities] = useState("");

  const [showAmenitiesInput, setShowAmenitiesInput] = useState(false);
  const [otherAmenities, setOtherAmenities] = useState([]);
  const [showUtilitiesInput, setShowUtilitiesInput] = useState(false);
  const [otherUtilities, setOtherUtilities] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "name, value");
    setPropertyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxInputChange = (e) => {
    const { name, value } = e.target;
    if (value === "others" && name === "amenities") {
      setShowAmenitiesInput(true);
    } else if (value === "others" && name === "utilities") {
      setShowUtilitiesInput(true);
    } else {
      setPropertyData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    }
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    setPropertyData((prevData) => ({ ...prevData, images: files }));
  };

  const handleUtilitiesChange = (e) => {
    setPropertyData({
      ...propertyData,
      utilities: [...propertyData.utilities, tempUtilities],
    });
    setOtherUtilities([...otherUtilities, tempUtilities]);
    setTempUtilities("");
  };

  const handleAmenitiesChange = (e) => {
    setPropertyData({
      ...propertyData,
      amenities: [...propertyData.amenities, tempAmenities],
    });
    setOtherAmenities([...otherAmenities, tempAmenities]);
    setTempAmenities("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Data:", propertyData);
  };

  return (
    <div className="property-forms-div">
      <div className="add-property-header">
        <p className="header">Add Property</p>
      </div>
      <form className="forms-div">
        <div className="input-container">
          <p className="input-header">Name of the Property</p>
          <input
            type="text"
            placeholder="Name of the Property"
            className="input-field"
            name="name"
            value={propertyData.name}
            onChange={handleInputChange}
          />
        </div>
        <br />

        <div className="input-container">
          <p className="input-header">Address</p>
          <input
            type="text"
            placeholder="Address"
            className="input-field"
            name="address"
            value={propertyData.address}
            onChange={handleInputChange}
          />
        </div>
        <br />

        <div className="input-container">
          <p className="input-header">Description</p>
          <textarea
            name="description"
            placeholder="Description"
            className="input-field textarea"
            value={propertyData.description}
            onChange={handleInputChange}
          />
        </div>
        <br />

        <div className="input-container">
          <p className="input-header">Bathrooms</p>
          <input
            type="number"
            placeholder="Bathrooms"
            className="input-field"
            name="bathrooms"
            value={propertyData.bathrooms}
            onChange={handleInputChange}
          />
        </div>
        <br />

        <div className="input-container">
          <p className="input-header">Bedrooms</p>
          <input
            type="number"
            placeholder="Bedrooms"
            className="input-field"
            name="beds"
            value={propertyData.beds}
            onChange={handleInputChange}
          />
        </div>
        <br />

        <div className="input-container">
          <p className="input-header">Rent</p>
          <input
            type="number"
            placeholder="Rent"
            className="input-field"
            name="price"
            value={propertyData.price}
            onChange={handleInputChange}
          />
        </div>
        <br />

        <div className="input-container">
          <p className="input-header">Amenities</p>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="dishwasher"
              onChange={handleCheckboxInputChange}
            />
            Dishwasher
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="washer and dryer"
              onChange={handleCheckboxInputChange}
            />
            Washer & Dryer
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="microwave"
              onChange={handleCheckboxInputChange}
            />
            Microwave
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="refrigerator"
              onChange={handleCheckboxInputChange}
            />
            Refrigerator
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="stove"
              onChange={handleCheckboxInputChange}
            />
            Stove
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="oven"
              onChange={handleCheckboxInputChange}
            />
            Oven
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="others"
              onChange={handleCheckboxInputChange}
            />
            Others
          </label>
        </div>

        {showAmenitiesInput ? (
          <>
            <input
              type="text"
              placeholder="Add Amenities"
              className="input-field"
              value={tempAmenities}
              onChange={(e) => setTempAmenities(e.target.value)}
            />

            <button type="button" onClick={handleAmenitiesChange}>
              Add
            </button>

            {console.log(propertyData, "propertyData")}
            <ul>
              {otherAmenities?.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </>
        ) : null}

        <div className="input-container utilities-header">
          <p className="input-header">Utilities</p>
          <label>
            <input
              type="checkbox"
              name="utilities"
              value="fireplace"
              onChange={handleCheckboxInputChange}
            />
            Fireplace
          </label>
          <label>
            <input
              type="checkbox"
              name="utilities"
              value="lawn"
              onChange={handleCheckboxInputChange}
            />
           Lawn
          </label>
          <label>
            <input
              type="checkbox"
              name="utilities"
              value="garage"
              onChange={handleCheckboxInputChange}
            />
            Garage
          </label>
          <label>
            <input
              type="checkbox"
              name="utilities"
              value="carpet"
              onChange={handleCheckboxInputChange}
            />
            Carpet
          </label>

          {/* <label>
            <input
              type="checkbox"
              name="utilities"
              value="stove"
              onChange={handleCheckboxInputChange}
            />
            Stove
          </label>
          <label>
            <input
              type="checkbox"
              name="utilities"
              value="oven"
              onChange={handleCheckboxInputChange}
            />
            Oven
          </label> */}
          
          <label>
            <input
              type="checkbox"
              name="utilities"
              value="others"
              onChange={handleCheckboxInputChange}
            />
            Others
          </label>
        </div>

        {showUtilitiesInput ? (
          <>
            <input
              type="text"
              placeholder="Add Utilities"
              className="input-field"
              value={tempUtilities}
              onChange={(e) => setTempUtilities(e.target.value)}
            />

            <button type="button" onClick={handleUtilitiesChange}>
              Add
            </button>

            <ul>
              {otherUtilities?.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </>
        ) : null}

        <label>
          Images : <br />
          <input type="file" multiple onChange={handleImageUpload} />
        </label>
        <br />
        <div className="submit-button-container">
          <OutlinedButton
            onClick={handleSubmit}
            btnTitle="Submit"
            className="submit-button"
          />
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
