import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import A from '../../assets/images/crazzy.png'
import B from '../../assets/images/house.png'

const ImageCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className='carousel'>
        <Slider {...settings}>
          <div>
            <img className='img' src={A} alt="one" />
          </div>
          <div>
            <img className='img' src={B} alt="two" />
          </div>
          <div>
            <img className='img' src={A} alt="three" />
          </div>
          {/* Add more images as needed */}
        </Slider>
      </div>
    );
  };

  export default ImageCarousel;