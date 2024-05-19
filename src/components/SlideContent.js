import React from 'react'

function SlideContent(props) {
  return (
    <div class="carousel__slide" style={{"background-image": `url(${props.background}`}}>
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
      <button>{props.cta}</button>
      <p>{props.location}</p>
      <div>
        <p>{props.modalText}</p>
        <button>{props.modalCTA}</button>
      </div>
    </div>
  )
}

export default SlideContent