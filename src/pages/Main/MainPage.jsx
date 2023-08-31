import React, {useEffect, useState} from 'react'
import Footer from './Footer'
import MultiCarousel  from "./MultiCarousel";
import UserReviews from "./UserReviews";
import OurFeatures from "./OurFeatures";
import Header from "./Header";
import Banner from "./Banner";
import styles from './../../styles/MainPage.module.css'

function MainPage() {
    
    const [mainPageData, setMainPageData] = useState([])
    const url = process.env.REACT_APP_URL

    useEffect(() => {
        fetch(`${url}/front/pages/1`)
            .then((response) => response.json())
            .then((data) => setMainPageData(data))
            .catch((error) => console.error(error))
    }, [])
    // console.log('>>>>>', mainPageData)

    return (
        <div className={styles.wrapper_mainPage}>
            <header>
                <Header />
                <Banner mainPageData={mainPageData}/>
            </header>
            <main className={styles.main_mainPage}>
                <MultiCarousel />
                <br/>
                <OurFeatures mainPageData={mainPageData}/>
                <br/>
                <UserReviews mainPageData={mainPageData}/>
                <br/>
            </main>
            <footer>
                <Footer mainPageData={mainPageData}/>
            </footer>
        </div>
  )
}

export default MainPage