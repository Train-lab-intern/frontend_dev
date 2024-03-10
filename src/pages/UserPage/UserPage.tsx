import './UserPage.scss';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import { getDataMainPage } from '../../redux/reducers/pagesDataReducer';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import UserPhoto from '../../assets/img/userImg.png';
import {IconUserLevel} from '../../assets/icons/icon_user_level';

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
          <div className='UserName'>
            <div className='UserName-name'>Алена Павлова</div>
            <div className='UserName-speciality'>QA Manual</div>
            <div className='UserName-level'>Уровень прожарки</div>
            <div className='UserName-levelIcon'>{IconUserLevel}</div>
          </div>
        </div>
      </section>
      <Footer mainPageData={mainPageData}/>
    </div>
  )
}