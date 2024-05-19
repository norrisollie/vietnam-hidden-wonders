import React, { useState } from "react";

import locationIcon from "../assets/location.svg";
import Modal from "./Modal";
import { useSwiper } from "swiper/react";

function SlideContent(props) {
  const [showModal, setShowModal] = useState(false);
  const modalToggle = () => setShowModal(!showModal);

  const swiper = useSwiper();
  swiper.on("slideChange", () => {
    setShowModal(false);
  });

  const {
    location,
    background,
    title,
    subtitle,
    cta,
    ctaColour,
    isVideo,
    modalAsset,
    modalText,
    modalCTA,
    modalCTAColour,
    modalAssetPoster,
    modalCTALink,
  } = props;

  const modalData = {
    showModal,
    isVideo,
    modalAsset,
    modalText,
    modalCTA,
    modalCTAColour,
    modalAssetPoster,
    modalCTALink,
  };

  return (
    <div className="slide">
      <div className="slide__background">
        <img src={background} aria-hidden alt="" />
      </div>
      <div className="slide__wrapper">
        <div className="slide__title">{title}</div>
        <div className="slide__subtitle">{subtitle}</div>
        <button
          className="slide__cta"
          style={{ backgroundColor: ctaColour }}
          onClick={modalToggle}
        >
          {cta}
        </button>
      </div>
      <div className="slide__location">
        <img
          className="slide__location-icon"
          src={locationIcon}
          alt=""
          aria-hidden
        />
        <span>{location}</span>
      </div>
      <Modal {...modalData} closeModal={modalToggle} />
    </div>
  );
}

export default SlideContent;
