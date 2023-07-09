import styles from '../../styles/UserReviews.module.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {Container} from "react-bootstrap";
import userImage from '../../img/userImg.png'


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
    return (
        <>
            <div className={styles.wrapper}>
                <Container>
                    <div className={styles.wrapper}>
                        <Carousel responsive={responsive} >
                            <div className={styles.cart}>
                                <img src={userImage} alt="User image"/>
                                <span>здесь будет история успеха нашего пользователя</span>
                            </div>

                            <div className={styles.cart}>
                                <img src={userImage} alt="User image"/>
                                <span>здесь будет история успеха нашего пользователя</span>
                            </div>

                            <div className={styles.cart}>
                                <img src={userImage} alt="User image"/>
                                <span>здесь будет история успеха нашего пользователя</span>
                            </div>

                            <div className={styles.cart}>
                                <img src={userImage} alt="User image"/>
                                <span>здесь будет история успеха нашего пользователя</span>
                            </div>
                        </Carousel>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default UserReviews ;