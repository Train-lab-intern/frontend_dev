import React, {useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import MultiCarousel  from "../../components/MultiCarousel/MultiCarousel";
import UserReviews from "../../components/UserReviews/UserReviews";
import OurFeatures from "./OurFeatures";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import styles from './MainPage.module.css'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {getDataMainPage} from "../../redux/reducers/pagesDataReducer";

function MainPage() {

  const dispatch = useAppDispatch()
  const mainPageData = useAppSelector(state => state.pagesData.mainPageData)

  useEffect(() => {
    dispatch(getDataMainPage())
  },[])

    return (
        <div className={styles.wrapper_mainPage}>
            <header>
                <Header />
                <Banner title={mainPageData['1.1']} text={mainPageData['1.2']}/>
            </header>
            <main className={styles.main_mainPage}>
                <MultiCarousel />
                <br/>
                <OurFeatures items={
                  [mainPageData['1.3'], mainPageData['1.4'], mainPageData['1.5'], mainPageData['1.6'],]
                }/>
                <br/>
                <UserReviews reviews={
                  [mainPageData['1.8'], mainPageData['1.8'], mainPageData['1.8'], mainPageData['1.8']]
                }/>
                <br/>
            </main>
            <footer>
                <Footer mainPageData={mainPageData}/>
            </footer>
        </div>
  )
}

export default MainPage