import React from 'react'

const InfoCard = (props) => {

    const {imageLink, header, content} = props;

  return (
    <div className='info-card'>
      <div className='image-container'>
        <img src={imageLink} alt="property" className='image'/>
      </div>
      <div className='header-container'><p className='header'>{header}</p></div>
      <div className='content-container'><p className='content'>{content}</p></div>
    </div>
  )
}

export default InfoCard
