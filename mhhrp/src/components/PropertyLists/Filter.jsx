import React, { useState, useEffect } from "react";

const Filter = () => {
  const [filters, setFilters] = useState({
    typesOfHouse: [],
    numberOfBedrooms: [],
    numberOfBathrooms: [],
    availibility: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: [...prevFilters[name], value],
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: prevFilters[name].filter((item) => item !== value),
      }));
    }
  };

  const applyFilters = () => {
    console.log("Selected Filters:", filters);
  };

  return (
    <div
      className="filter"
    >
      <h2 className="filter-header">Filters</h2>
      <div className="filter-scrollable">
      <div className="filter-component">
        <h3>Types of House</h3>
        <label>
          <input
            type="checkbox"
            name="typesOfHouse"
            value="Apartment"
            onChange={handleChange}
          />{" "}
          Apartment
        </label>
        <label>
          <input
            type="checkbox"
            name="typesOfHouse"
            value="SingleHouse"
            onChange={handleChange}
          />{" "}
          Single Family House
        </label>
        <label>
          <input
            type="checkbox"
            name="typesOfHouse"
            value="TownHouse"
            onChange={handleChange}
          />{" "}
          Independent Townhouse
        </label>
        <label>
          <input
            type="checkbox"
            name="typesOfHouse"
            value="Condo"
            onChange={handleChange}
          />{" "}
          Condo
        </label>
      </div>
      <div className="filter-component">
        <h3>Bedrooms</h3>
        <label>
          <input
            type="checkbox"
            name="numberOfBedrooms"
            value="1"
            onChange={handleChange}
          />{" "}
          1
        </label>
        <label>
          <input
            type="checkbox"
            name="numberOfBedrooms"
            value="2"
            onChange={handleChange}
          />{" "}
          2
        </label>
        <label>
          <input
            type="checkbox"
            name="numberOfBedrooms"
            value="3"
            onChange={handleChange}
          />{" "}
          3
        </label>
        <label>
          <input
            type="checkbox"
            name="numberOfBedrooms"
            value="4"
            onChange={handleChange}
          />{" "}
          4
        </label>
        <label>
          <input
            type="checkbox"
            name="numberOfBedrooms"
            value="5"
            onChange={handleChange}
          />{" "}
          5+
        </label>
      </div>
      <div className="filter-component">
        <h3>Bathrooms</h3>
        <label>
          <input
            type="checkbox"
            name="numberOfBathrooms"
            value="1"
            onChange={handleChange}
          />{" "}
          1
        </label>
        <label>
          <input
            type="checkbox"
            name="numberOfBathrooms"
            value="2"
            onChange={handleChange}
          />{" "}
          2
        </label>
        <label>
          <input
            type="checkbox"
            name="numberOfBathrooms"
            value="3"
            onChange={handleChange}
          />{" "}
          3
        </label>
        <label>
          <input
            type="checkbox"
            name="numberOfBathrooms"
            value="4"
            onChange={handleChange}
          />{" "}
          4
        </label>
      </div>
      <div className="filter-component filter-last">
        <h3>Availability</h3>
        <label>
          <input
            type="checkbox"
            name="availibility"
            value="Available"
            onChange={handleChange}
          />{" "}
          Available
        </label>
        <label>
          <input
            type="checkbox"
            name="availibility"
            value="ComingSoon"
            onChange={handleChange}
          />{" "}
          Coming Soon
        </label>
        <label>
          <input
            type="checkbox"
            name="availibility"
            value="SoldOut"
            onChange={handleChange}
          />{" "}
          Sold Out
        </label>
      </div >
      </div>
      <button className="filter-button" onClick={applyFilters}>Apply</button>
    </div>
  );
};

export default Filter;
