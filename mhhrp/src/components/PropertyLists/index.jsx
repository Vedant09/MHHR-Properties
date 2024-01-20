import React from "react";
import { PropertyListData } from "./data";
import Card from "./Card";
import OutlinedButton from "../common/Button";
import { NavLink } from "react-router-dom";
import { RoutePaths } from "../../utils/routes";

const index = () => {
  const cards = PropertyListData.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="mainbody">
      <div className="add-property-button-container">
        <NavLink to={RoutePaths.addPropertyForm} className="property-nav-link">
          <OutlinedButton className='button-property-comp' btnTitle='Add Property' />
        </NavLink>
      </div>
      <section className="cards-list">{cards}</section>
    </div>
  );
};

export default index;
