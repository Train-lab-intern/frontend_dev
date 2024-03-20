import "./CustomSlider.scss";
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { arrowSlider } from '../../assets/icons/arrowSlider';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { ReactElement, useEffect, useRef, useState } from 'react';

interface CustomSliderProps extends SwiperProps {
  slides: Array<ReactElement>
  lightTheme?: Boolean
}

export const useSwiperRef = () => {
  const [wrapper, setWrapper] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setWrapper(ref.current);
  }, []);

  return [
    wrapper,
    ref
  ]
};

export const CustomSlider = (props:CustomSliderProps) => {

  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return ( 
  <div className='CustomSlider'>
    <button className={`CustomSlider-Arrow ${props.lightTheme ? "light" : ""}`} ref={prevElRef}>{arrowSlider}</button>
    <Swiper
      navigation={{
        prevEl,
        nextEl,
      }}
      modules={[Navigation, Pagination]}
      pagination={props.pagination}
      spaceBetween={props.spaceBetween}
      slidesPerView={props.slidesPerView}
      breakpoints={props.breakpoints}
      loop={props.loop}
    >
      {props.slides.map((element, index) => {
        return (
          <SwiperSlide key={index}>{element}</SwiperSlide>
        )
      })}
    </Swiper>
    <button className={`CustomSlider-Arrow ${props.lightTheme ? "light" : ""}`} ref={nextElRef}>{arrowSlider}</button>
  </div>
  )
}