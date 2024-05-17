import './CustomSlider.scss';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import arrowSlider from '../../assets/icons/arrowSlider';

interface CustomSliderProps extends SwiperProps {
  slides: Array<ReactElement>;
  lightTheme?: boolean;
}

export const useSwiperRef = () => {
  const [wrapper, setWrapper] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setWrapper(ref.current);
  }, []);

  return [wrapper, ref];
};

export function CustomSlider(props: CustomSliderProps) {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  const {
    pagination,
    spaceBetween,
    slidesPerView,
    breakpoints,
    loop,
    slides,
    lightTheme = false,
  } = props;

  return (
    <div className="CustomSlider">
      <button
        type="button"
        className={`CustomSlider-Arrow ${lightTheme ? 'light' : ''}`}
        ref={prevElRef}
      >
        {arrowSlider}
      </button>
      <Swiper
        navigation={{
          prevEl,
          nextEl,
        }}
        modules={[Navigation, Pagination]}
        pagination={pagination}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        loop={loop}
      >
        {slides.map((element, index) => (
          <SwiperSlide key={index}>{element}</SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        className={`CustomSlider-Arrow ${lightTheme ? 'light' : ''}`}
        ref={nextElRef}
      >
        {arrowSlider}
      </button>
    </div>
  );
}
CustomSlider.defaultProps = { lightTheme: false };
