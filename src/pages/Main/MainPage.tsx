import React from 'react'
import Footer from './Footer'
import MultiCarousel  from "./MultiCarousel";
import UserReviews from "./UserReviews";
import OurFeatures from "./OurFeatures";
import Header from "./Header";
import Banner from "./Banner";

function MainPage() {
  return (
    <div>
        <main>
            <Header />
            <Banner />
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