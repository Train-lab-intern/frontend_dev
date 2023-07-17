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
    useEffect(() => {
        fetch('https://back-test-4zwpv.ondigitalocean.app/front/main-pages')
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