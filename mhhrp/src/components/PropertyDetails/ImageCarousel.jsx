import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import A from '../../assets/images/1.png'
import B from '../../assets/images/2.png'
import C from '../../assets/images/3.png'
import D from '../../assets/images/4.png'
import E from '../../assets/images/5.png'
import F from '../../assets/images/6.png'


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
            <img className='img' src={C} alt="three" />
          </div>
          <div>
            <img className='img' src={D} alt="three" />
          </div>
          <div>
            <img className='img' src={E} alt="three" />
          </div>
          <div>
            <img className='img' src={F} alt="three" />
          </div>
          {/* Add more images as needed */}
        </Slider>
      </div>
    );
  };

  export default ImageCarousel;