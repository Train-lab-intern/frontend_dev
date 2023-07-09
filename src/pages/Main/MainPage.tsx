import React from 'react'
import Footer from './Footer'
import MultiCarousel  from "./MultiCarousel";
import UserReviews from "./UserReviews";
import OurFeatures from "./OurFeatures";
import Header from "./Header";
import Banner from "./Banner";
import styles from './../../styles/MainPage.module.css'

function MainPage() {
  return (
        <div className={styles.wrapper_mainPage}>
            <header>
                <Header />
                <Banner />
            </header>
            <main  className={styles.main_mainPage}>
                <MultiCarousel />
                <br/>
                <OurFeatures />
                <br/>
                <UserReviews />
                <br/>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
  )
}

export default MainPage