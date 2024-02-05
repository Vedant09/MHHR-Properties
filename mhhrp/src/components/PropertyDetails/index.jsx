import React from 'react'
import OutlinedButton from '../common/Button';
import ImageCarousel from './ImageCarousel';
import PropertyContent from './PropertyContent'


const PropertyDetails = () => {

    return (
        <div className='property-details-component'>
            <div className='property-images'>
                <ImageCarousel/>
            </div>
            <div className='property-info'>
                <div className='property-address'>
                    <h1 className='header'>Carriagepark Fairfax</h1>
                    <p className='content'>4831 Carriagepark Rd, Fairfax, VA 22030</p>
                </div>
                <div className='property-content'>
                    <PropertyContent/>
                </div>
                <div className='button-container'>
                <OutlinedButton btnTitle='Apply' className='apply-button'/>
                </div>
            </div>
        </div>
        
    );
};

export default PropertyDetails;