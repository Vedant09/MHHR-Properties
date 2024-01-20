import React from "react";
import BathImg from "../../assets/images/bath.png";
import BedImg from "../../assets/images/bed.png";
import LocImg from "../../assets/images/location.png";
import OutlinedButton from "../common/Button";
import { NavLink } from "react-router-dom";
import { RoutePaths } from "../../utils/routes";

export default function Card(props) {

  const badgeText = props.item.available ? "AVAILABLE" : "SOLD OUT";
  const styles = { color: props.item.available ? "#008000" : "#FF0000" };

  return (
    <div className="card">
      {badgeText && (
        <div className="card--badge" style={styles}>
          {badgeText}
        </div>
      )}
      <img src={props.item.coverImg} className="card--image" alt="property" />
      <div className="card--stats">
        <p className="card--title">{props.item.title}</p>
        <div>
          <img src={LocImg} className="card--icon" alt="address-icon" />
          <span className="card--address">{props.item.address}</span>
        </div>
        <div className="card--info">
          <img src={BathImg} className="card--icon" alt="bath-icon" />
          <span className="gray"> {props.item.stats.bed} Bed </span>
          <img src={BedImg} className="card--icon" alt="bed-icon" />
          <span className="gray"> {props.item.stats.bath} Bath</span>
        </div>
      </div>
      <div className="card-button">
        <p>
          <span className="card--price">{props.item.price}</span>
          <span className="per-month"> / MO</span>
        </p>
        {/* <button className="button-comp">More Info</button> */}
        <NavLink to={RoutePaths.propertyDetails} className="card-nav-link">
          <OutlinedButton btnTitle="More Info" className="button-comp" />
        </NavLink>
      </div>
    </div>
  );
}
