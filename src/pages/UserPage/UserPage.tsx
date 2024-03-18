import './UserPage.scss';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import { getDataMainPage } from '../../redux/reducers/pagesDataReducer';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import UserPhoto from '../../assets/img/userImg.png';
import { IconUserLevel } from '../../assets/icons/icon_user_level';
import { CommonButton } from '../../components/CommonButton/CommonButton';
import { iconDone } from '../../assets/icons/icon_done';

import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiperRef } from '../Main/Slider/Slider';
import { arrowSlider } from '../../assets/icons/arrowSlider';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const UserPage = () => {

  const dispatch = useAppDispatch()
  const mainPageData = useAppSelector(state => state.pagesData.mainPageData)

  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  const [nextEl2, nextElRef2] = useSwiperRef();
  const [prevEl2, prevElRef2] = useSwiperRef();

  useEffect(() => {
    dispatch(getDataMainPage())
  }, [])

  return (
    <div className={"UserPage"}>
      <Header/>
      <section className='UserInfo'>
        <div className='container'>
          <div className='UserPhoto'>
            <img src={UserPhoto} alt="userPhoto" />
          </div>
          <div className='UserDescription'>
            <div className='UserDescription-name'>Алена Павлова</div>
            <ul className='UserDescription-shortResults'>
              <li>
                <div className='UserDescription-shortResults-speciality'>QA Manual</div>
                <div className='UserDescription-shortResults-level'>Уровень прожарки</div>
                <div className='UserDescription-shortResults-levelIcon'>{IconUserLevel}</div>
              </li>
              <li>
                <div className='UserDescription-shortResults-speciality'>QA Manual</div>
                <div className='UserDescription-shortResults-level'>Уровень прожарки</div>
                <div className='UserDescription-shortResults-levelIcon'>{IconUserLevel}</div>
              </li>
              <li>
                <div className='UserDescription-shortResults-speciality'>AQA Pyton</div>
                <div className='UserDescription-shortResults-level'>Уровень прожарки</div>
                <div className='UserDescription-shortResults-levelIcon'>{IconUserLevel}</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='Welcome'>
        <div className='container'>
          <h2>Привет, Имя!</h2>
          <h2>Добро пожаловать в трекинг знаний.</h2>
          <div className='MainActions'>
              <CommonButton variant={'outline'}>Начать новый тест</CommonButton>
              <CommonButton variant={'primary'}>Ознакомиться со статистикой</CommonButton>
          </div>
        </div>
      </section>
      <section className='Tests'>
        <div className='container SwiperWrapper'>
        <button className='SwiperArrow swiper1-button-prev' ref={prevElRef}>{arrowSlider}</button>
        <Swiper
        className='Swiper1'
        navigation={{
          prevEl,
          nextEl,
        }}
        modules={[Navigation, Pagination]}
        effect={"cube"}
        pagination={true}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          700: {
            slidesPerView: 2
          },
          1000: {
            slidesPerView: 3
          }
        }}       
      >
        {
        [1,2,3,4,5].map(item => {
          return (
            <SwiperSlide>
              <div className='Test'>
                <div className='Test-title'>QA Manual</div>
                <div className='Test-result'>
                  <div className='Bar'>
                    <div className='Bar-fill'></div>
                    <div className='Bar-procent'>30%</div>
                    <div className='Bar-done'>{iconDone}</div>
                  </div>
                  <div className='Test-result--date'>тест от 4 января</div>
                </div>
                <div className='Test-message'>
                  <div>Rare.</div>
                  <div>Это только начало пути!</div>
                  <div>Прожарь свои знания с нами.</div>
                </div>            
              </div>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
      <button className='SwiperArrow swiper1-button-next' ref={nextElRef}>{arrowSlider}</button>
    </div>
      </section>
      <section className='Recomendation'>
        <div className='container'>
          <div className='Recomendation-Title'>Полезные материалы для прожарки знаний</div>
          <div className='SwiperWrapper'>          
            <button className='SwiperArrow' ref={prevElRef2}>{arrowSlider}</button>
            <Swiper
            className='Swiper2'
            navigation={{
              prevEl2,
              nextEl2,
            }}
            modules={[Navigation, Pagination]}
            effect={"cube"}
            pagination={true}
            loop={true}
            spaceBetween={64}
            slidesPerView={1}
            breakpoints={{
              700: {
                slidesPerView: 2
              },
              1000: {
                slidesPerView: 3
              }
            }}
          >            
            {
              [1,2,3,4,5].map(item => {
                return (
                  <SwiperSlide>
                    <div className='Recomendation-Card'>
                      <div className='Recomendation-Card--Title'>Java без опыта!</div>
                      <div className='Recomendation-Card--Description'>
                        <div>В Java-программирование можно прийти практически из любой сферы: это подтверждают результаты опроса. Для начала мы решили узнать, чем наши</div>
                        <div className='IconRecomendation'>{IconUserLevel}</div>
                      </div>
                      <div className='Recomendation-Card--Time'>
                        <div>10 дек 2023</div>
                        <div>Время чтения 10мин</div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
              }
            </Swiper>
            <button className='SwiperArrow' ref={nextElRef2}>{arrowSlider}</button>
          </div>
        </div>
      </section>
      <Footer mainPageData={mainPageData}/>
    </div>
  )
}