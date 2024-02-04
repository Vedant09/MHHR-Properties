import React from "react";
import BathImg from "../../assets/images/bath.png";
import BedImg from "../../assets/images/bed.png";
import LocImg from "../../assets/images/location.png";
import OutlinedButton from "../common/Button";
import { NavLink } from "react-router-dom";
import { RoutePaths } from "../../utils/routes";

export default function Card(props) {

  const {item} = props;

  const badgeText = item.available ? "AVAILABLE" : "SOLD OUT";
  const styles = { color: item.available ? "#008000" : "#FF0000" };

  return (
    <div className="card">
      {badgeText && (
        <div className="card--badge" style={styles}>
          {badgeText}
        </div>
      )}
      <img src={item?.images[0]} className="card--image" alt="property" />
      <div className="card--stats">
        <p className="card--title">{item.name}</p>
        <div>
          <img src={LocImg} className="card--icon" alt="address-icon" />
          <span className="card--address">{item.address}</span>
        </div>
        <div className="card--info">
          <img src={BathImg} className="card--icon" alt="bath-icon" />
          <span className="gray"> {item.bedrooms} Bed </span>
          <img src={BedImg} className="card--icon" alt="bed-icon" />
          <span className="gray"> {item.bathrooms} Bath</span>
        </div>
      </div>
      <div className="card-button">
        <p>
          <span className="card--price">${item.rent}</span>
          <span className="per-month"> / MO</span>
        </p>
        <NavLink to={RoutePaths.propertyDetails} className="card-nav-link">
          <OutlinedButton btnTitle="More Info" className="button-comp" />
        </NavLink>
      </div>
    </div>
  );
}
