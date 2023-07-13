import styles from '../../styles/UserReviews.module.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {Container} from "react-bootstrap";
import userImage from '../../img/userImg.png'
import {useEffect, useState} from "react";
import axios from "axios";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 4
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 2
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};


function UserReviews (){
    const [dataText, setDataText] = useState()

    useEffect(() => {
        axios.get("https://back-test-4zwpv.ondigitalocean.app/front/main-page")
            .then(data => setDataText(data.data))
    },[])


    return (
        <>
            <div className={styles.wrapper}>
                <Container >
                    <div className={styles.wrapper}>
                        <Carousel responsive={responsive} >
                            <div className={styles.cart}>
                                <img src={userImage} alt="User image"/>
                                <span>{dataText ? dataText['1.8'] : ''}</span>
                            </div>

                            <div className={styles.cart}>
                                <img src={userImage} alt="User image"/>
                                <span>{dataText ? dataText['1.8'] : ''}</span>
                            </div>

                            <div className={styles.cart}>
                                <img src={userImage} alt="User image"/>
                                <span>{dataText ? dataText['1.8'] : ''}</span>
                            </div>

                            <div className={styles.cart}>
                                <img src={userImage} alt="User image"/>
                                <span>{dataText ? dataText['1.8'] : ''}</span>
                            </div>
                        </Carousel>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default UserReviews ;