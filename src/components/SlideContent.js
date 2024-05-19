import React, { useState } from 'react'

import locationIcon from "../assets/location.svg"
import Modal from './Modal'
import { useSwiper } from 'swiper/react'

function SlideContent(props) {

  const [showModal, setShowModal] = useState(false)

  const modalToggle = () => setShowModal(!showModal)

  const {  location, background, title, subtitle, cta, ctaColour, isVideo, modalAsset, modalText, modalCTA, modalCTAColour, modalAssetPoster } = props

  const modalData = { isVideo, modalAsset, modalText, modalCTA, modalCTAColour, modalAssetPoster }

  const swiper = useSwiper()

  swiper.on("slideChange", () => {
    setShowModal(false)
  })

  return (
    <div className="slide" style={{backgroundImage: `url(${background}`}}>
      <div className='slide__wrapper'> 
        <div className='slide__title'>{title}</div>
        <div className='slide__subtitle'>{subtitle}</div>
        <button className='slide__cta' style={{backgroundColor: ctaColour}} onClick={modalToggle}>{cta}</button>
      </div>

      {showModal && <Modal {...modalData} closeModal={modalToggle} /> }

      <div className="slide__location">
        <img className="slide__location-icon" src={locationIcon} alt="" aria-hidden/>
        <span>{location}</span>
      </div>
    </div>
  )
}

export default SlideContent