import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/Banner.module.css'
import axios from "axios";

interface Props {
    mainPageData: any;
};

function Banner({ mainPageData }:Props) {
    // const [dataText, setDataText] = useState()
    console.log('<><><><><><><>', mainPageData)
    // useEffect(() => {
    //     axios.get("https://back-test-4zwpv.ondigitalocean.app/front/main-page")
    //         .then(data => setDataText(data.data))
    // },[])

    return (
        <Container >
            <div className={styles.wrapper}>
                <Row className={styles.row_banner}>
                    <Col md={6}>
                        <h3 className={styles.h3_banner}>{mainPageData ? mainPageData['1.1'] : ''}</h3>
                        <span className={styles.text_banner}>{mainPageData ? mainPageData['1.2'] : ''}</span>
                    </Col>
                    <Col md={4} className={styles.col_banner_btn}>
                        <button className={styles.btn_banner}>Начать путь</button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Banner;