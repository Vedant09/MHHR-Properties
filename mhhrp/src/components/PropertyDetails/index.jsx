import React, { useEffect, useState } from 'react';
import OutlinedButton from '../common/Button';
import ImageCarousel from './ImageCarousel';
import PropertyContent from './PropertyContent';
import { useLocation } from 'react-router-dom';
import { getPropertyDetailsById } from "../../api/properties";


const PropertyDetails = () => {

    let location = useLocation();
    const propertyId = location?.state?.id;
    const [propertyDetail, setpropertyDetail] = useState([]);
    const [error, setError] = useState("");

    const getDetailsData = async () => {
        try {
            setError("");
            const resData = await getPropertyDetailsById(propertyId);
            setpropertyDetail(resData?.data?.data);
        } catch (error) {
            console.log("hi")
            setError(error?.message);
        }
    };
    console.log(propertyDetail)
    useEffect(() => {
        getDetailsData();
    }, []);

    return (
        <div className='property-details-component'>
            <div className='property-images'>
                <ImageCarousel />
            </div>
            <div className='property-info'>
                <div className='property-address'>
                    <h1 className='header'>{propertyDetail.name}</h1>
                    <p className='content'>{propertyDetail.address}</p>
                </div>
                <div className='property-content'>
                    <PropertyContent data={propertyDetail}/>
                </div>
                <div className='button-container'>
                    <OutlinedButton btnTitle='Apply' className='apply-button' />
                </div>
            </div>
        </div>

    );
};

export default PropertyDetails;