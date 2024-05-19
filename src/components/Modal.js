import React, { useRef, useState } from "react";

import playButton from "../assets/play.svg";
import pauseButton from "../assets/pause.svg";
import closeButton from "../assets/close.svg";

export default function Modal(props) {
  const {
    isVideo,
    modalAsset,
    modalText,
    modalCTA,
    modalCTAColour,
    closeModal,
    modalAssetPoster,
    modalCTALink,
  } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleVideoClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <div className="modal__container">
      <div className="modal__background"></div>
      <button className="modal__close" onClick={closeModal}>
        <img src={closeButton} aria-hidden alt="" />
      </button>
      <div className="modal__column-left">
        {isVideo ? (
          <>
            <video
              src={modalAsset}
              poster={modalAssetPoster}
              ref={ref}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            <button
              className={`modal__play ${
                isPlaying ? "modal--video-is-playing" : "modal--video-is-paused"
              }`}
              onClick={handleVideoClick}
            >
              <img
                src={isPlaying ? pauseButton : playButton}
                alt=""
                aria-hidden
              />
            </button>
          </>
        ) : (
          <img src={modalAsset} alt="" />
        )}
      </div>
      <div className="modal__column-right">
        <div className="modal__text">{modalText}</div>
        <a
          href={modalCTALink}
          target="_blank"
          className="modal__cta"
          style={{ backgroundColor: modalCTAColour }}
          rel="noreferrer"
        >
          {modalCTA}
        </a>
      </div>
    </div>
  );
}
