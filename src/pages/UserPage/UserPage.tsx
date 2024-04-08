import './UserPage.scss';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import { getDataMainPage } from '../../redux/reducers/pagesDataReducer';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import UserPhoto from '../../assets/img/userImg.png';
import { IconUserLevel } from '../../assets/icons/icon_user_level';
import { CommonButton } from '../../components/CommonButton/CommonButton'; 
import { CustomSlider } from '../../components/CustomSlider/CustomSlider';
import { TestCard } from '../../components/TestCard/TestCard';
import { RecomendationCard } from '../../components/RecomendationCard/RecomendationCard';

export const UserPage = () => {

  const dispatch = useAppDispatch()
  const mainPageData = useAppSelector(state => state.pagesData.mainPageData) 

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
              {[1,2,3].map(el => {
                return <li key={el}>
                <div className='UserDescription-shortResults-speciality'>QA Manual</div>
                <div className='UserDescription-shortResults-level'>Уровень прожарки</div>
                <div className='UserDescription-shortResults-levelIcon'>{IconUserLevel}</div>
              </li>
              })}             
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
          <CustomSlider
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
            slides={[1,2,3,4].map(item => <TestCard/>)}            
          >            
          </CustomSlider>
    </div>
      </section>
      <section className='Recomendation'>
        <div className='container'>
          <div className='Recomendation-Title'>Полезные материалы для прожарки знаний</div>
          <CustomSlider
            loop={true}
            spaceBetween={64}
            pagination={true}
            slidesPerView={1}
            breakpoints={{
              700: {
                slidesPerView: 2
              },
              1000: {
                slidesPerView: 3
              }
            }} 
            slides={[1,2,3,4,5].map(item => <RecomendationCard/>)}
            lightTheme={true}
          >
          </CustomSlider>
        </div>
      </section>
      <Footer mainPageData={mainPageData}/>
    </div>
  )
}