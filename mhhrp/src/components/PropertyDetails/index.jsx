import React, { useEffect, useState } from "react";
import OutlinedButton from "../common/Button";
// import ImageCarousel from './ImageCarousel';
import PropertyContent from "./PropertyContent";
import { useLocation } from "react-router-dom";
import { getPropertyDetailsById } from "../../api/properties";

const PropertyDetails = () => {
  let location = useLocation();
  const propertyId = location?.state?.id;
  const [propertyDetail, setPropertyDetail] = useState([]);
  const [error, setError] = useState("");

  const getDetailsData = async () => {
    try {
      setError("");
      const resData = await getPropertyDetailsById(propertyId);
      setPropertyDetail(resData?.data?.data);
    } catch (error) {
      setError(error?.message);
    }
  };
  useEffect(() => {
    getDetailsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="property-details-component">
      <div className="video-frame">
        <iframe
          title="youtube-video"
          width="600"
          height="550"
          src="https://www.youtube.com/embed/htjq0Qj9zVI"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="property-info">
        <div className="property-address">
          <h1 className="header">{propertyDetail.name}</h1>
          <p className="content">{propertyDetail.address}</p>
        </div>
        <div className="property-content">
          <PropertyContent data={propertyDetail} />
        </div>
        <div className="button-container">
          <OutlinedButton btnTitle="Apply" className="apply-button" />
        </div>
        {error ? <p className="error-message">{error}</p> : null}
      </div>
    </div>
  );
};

export default PropertyDetails;
