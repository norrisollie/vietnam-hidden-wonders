import React from 'react'

import locationIcon from "../assets/location.svg"

function SlideContent(props) {

  const { location, background, title, subtitle, cta, ctaColour } = props

  return (
    <div className="slide" style={{backgroundImage: `url(${background}`}}>
      <div className='slide__wrapper'> 
        <div className='slide__title'>{title}</div>
        <div className='slide__subtitle'>{subtitle}</div>
        <button className='slide__cta' style={{backgroundColor: ctaColour}}>{cta}</button>
      </div>
      {/* <div>
        <p>{props.modalText}</p>
        <button>{props.modalCTA}</button>
      </div> */}

      <div className="slide__location">
        <img className="slide__location-icon" src={locationIcon} alt="" aria-hidden/>
        <span>{location}</span>
      </div>
    </div>
  )
}

export default SlideContent