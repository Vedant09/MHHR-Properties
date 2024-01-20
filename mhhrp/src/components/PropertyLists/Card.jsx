import React from "react"
import BathImg from '../../assets/images/bath.png';
import BedImg from '../../assets/images/bed.png';
import LocImg from '../../assets/images/location.png';
import OutlinedButton from "../common/Button";

export default function Card(props) {
    let badgeText
    if (props.item.available) {
        badgeText = "AVAILABLE"
    } else {
        badgeText = "SOLD OUT"
    }
    const styles = { color: props.item.available ? "#008000": "#FF0000"}
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge" style={styles}>{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image" />
            <div className="card--stats">
                <p className="card--title">{props.item.title}</p>
                <div>
                    <img src={LocImg} className="card--icon" />
                    <span className="card--address">{props.item.address}</span>
                </div>
                <div className="card--info">
                    <img src={BathImg} className="card--icon" />
                    <span className="gray"> {props.item.stats.bed} Bed </span>
                    <img src={BedImg} className="card--icon" />
                    <span className="gray"> {props.item.stats.bath} Bath</span>
                </div>
            </div>
            <div className="card-button">    
                <p>
                    <span className="card--price">{props.item.price}</span>
                    <span className="per-month"> / MO</span>
                </p>
                {/* <button className="button-comp">More Info</button> */}
                <OutlinedButton btnTitle="More Info" className="button-comp"/>
            </div>
        </div>
    )
}