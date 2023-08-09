import React, {useEffect} from 'react'
import Footer from './Footer'
import MultiCarousel from "./MultiCarousel";
import UserReviews from "./UserReviews";
import OurFeatures from "./OurFeatures";
import Header from "./Header";
import Banner from "./Banner";
import styles from './../../styles/MainPage.module.css'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {getDataMainPage} from "../../redux/reducers/pagesDataReducer";

function MainPage() {

  const dispatch = useAppDispatch()
  const mainPageData = useAppSelector(state => state.pagesData.mainPageData)

  useEffect(() => {
    dispatch(getDataMainPage())
  }, [])

  return (
    <div className={styles.wrapper_mainPage}>
      {mainPageData && <>
        <header>
          <Header/>
          <Banner mainPageData={mainPageData}/>
        </header>
        <main className={styles.main_mainPage}>
          <MultiCarousel/>
          <br/>
          <OurFeatures mainPageData={mainPageData}/>
          <br/>
          <UserReviews mainPageData={mainPageData}/>
          <br/>
        </main>
        <footer>
          <Footer mainPageData={mainPageData}/>
        </footer>
      </>}
    </div>
  )
}

export default MainPage