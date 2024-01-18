import React from 'react'
import ImageCarousel from './ImageCarousel';
import PropertyContent from './PropertyContent'



const index = () => {
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
                <button className='apply-button'>Apply</button>
                </div>
            </div>

        </div>
    );
};

export default index;