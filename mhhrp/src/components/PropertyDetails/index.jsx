import React from 'react'
import ImageCarousel from './ImageCaarousel';



const index = () => {
    return (
        <div className='property-details-component'>
            <div className='property-images'>
                <ImageCarousel/>
            </div>
            <div className='property-info'>
                <div className='property-address'>

                </div>
                <div className='property-content'>

                </div>
                <button className='apply-button'>Apply</button>
            </div>

        </div>
    );
};

export default index;