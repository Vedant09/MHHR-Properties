import React, { useEffect, useState } from "react";
import { PropertyListData } from "./data";
import Card from "./Card";
import OutlinedButton from "../common/Button";
import { NavLink } from "react-router-dom";
import { RoutePaths } from "../../utils/routes";
import { getAllProperties } from "../../api/properties";

const PropertyList = () => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [error, setError] = useState("");

  const getAllPropertiesData = async () => {
    try {
      setError("");
      const resData = await getAllProperties();
      setPropertiesData(resData?.data?.data);
    } catch (error) {
      setError(error?.message);
    }
  };

  useEffect(() => {
    getAllPropertiesData();
  }, []);

  const cards = propertiesData.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="mainbody">
      <div className="add-property-button-container">
        <NavLink to={RoutePaths.addPropertyForm} className="property-nav-link">
          <OutlinedButton
            className="button-property-comp"
            btnTitle="Add Property"
          />
        </NavLink>
      </div>
      <section className="cards-list">{cards}</section>
      {error ? <p className="error-message">{error}</p> : null}
    </div>
  );
};

export default PropertyList;
