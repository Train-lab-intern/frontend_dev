/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './Slider.module.scss';

import 'swiper/css';
import arrowSlider from '../../../assets/icons/arrowSlider';

export const useSwiperRef = () => {
  const [wrapper, setWrapper] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setWrapper(ref.current);
  }, []);

  return [wrapper, ref];
};

export function Slider() {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
    <div className={styles.wrapper}>
      <button className={styles.arrowPrev} ref={prevElRef}>
        {arrowSlider}
      </button>
      <Swiper
        navigation={{
          prevEl,
          nextEl,
        }}
        className={styles.swip}
        effect="cube"
        modules={[Navigation]}
        spaceBetween={38}
        slidesPerView={'auto'}
        // breakpoints={{
        //   700: {
        //     slidesPerView: 2,
        //   },
        //   1000: {
        //     slidesPerView: 4,
        //   },
        // }}
      >
        <SwiperSlide>
          <div className={styles.item}>
            <h3 className={styles.title}>SQL</h3>
            <span className={styles.text}>
              Какой оператор позволяет создать таблицу?
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <h3 className={styles.title}>SQL</h3>
            <span className={styles.text}>
              Какой оператор позволяет создать таблицу?
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <h3 className={styles.title}>SQL</h3>
            <span className={styles.text}>
              Какой оператор позволяет создать таблицу?
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <h3 className={styles.title}>SQL</h3>
            <span className={styles.text}>
              Какой оператор позволяет создать таблицу?
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <h3 className={styles.title}>SQL</h3>
            <span className={styles.text}>
              Какой оператор позволяет создать таблицу?
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <h3 className={styles.title}>SQL</h3>
            <span className={styles.text}>
              Какой оператор позволяет создать таблицу?
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <h3 className={styles.title}>SQL</h3>
            <span className={styles.text}>
              Какой оператор позволяет создать таблицу?
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.item}>
            <h3 className={styles.title}>SQL</h3>
            <span className={styles.text}>
              Какой оператор позволяет создать таблицу?
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className={styles.arrowNext} ref={nextElRef}>
        {arrowSlider}
      </button>
    </div>
  );
}
