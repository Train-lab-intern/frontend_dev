import React from 'react'
import Footer from './Footer'
import MultiCarousel  from "./MultiCarousel";
import UserReviews from "./UserReviews";
import OurFeatures from "./OurFeatures";

function MainPage() {
  return (
    <div>
        <main>
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