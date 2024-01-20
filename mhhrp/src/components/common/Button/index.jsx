import React from 'react'

const OutlinedButton = (props) => {
    const {btnTitle, className, onClick} = props;
  return (
    <div className={`outline-button ${className}`} onClick={onClick}>{btnTitle}</div>
  )
}

export default OutlinedButton
