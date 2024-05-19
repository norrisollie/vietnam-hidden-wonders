import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import SlideContent from "./components/SlideContent";

import { slideData } from "./slideData";

import logo from "./assets/logo.png"

const slides = slideData.map((slide, i) => {
  return (
    <SwiperSlide>
      <SlideContent key={i} {...slide}/>
    </SwiperSlide>
  )
})

function App() {

  return (
    <div className="carousel__container">
        <div className="carousel__logo">
          <img src={logo} alt="" />
        </div>
        <button className="arrow__left"></button>
        <button className="arrow__right"></button>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation={{ nextEl: ".arrow__right", prevEl: ".arrow__left", disabledClass: "arrow--disabled" }}
        pagination={{clickable: true}}
      >
        {slides}
      </Swiper>
    </div>
  );
}

export default App;

