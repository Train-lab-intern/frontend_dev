import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/Banner.module.css'
import axios from "axios";

function Banner() {
    const [dataText, setDataText] = useState()

    useEffect(() => {
        axios.get("https://back-test-4zwpv.ondigitalocean.app/front/main-page")
            .then(data => setDataText(data.data))
    },[])

    return (
        <Container >
            <div className={styles.wrapper}>
                <Row className={styles.row_banner}>
                    <Col md={6}>
                        <h3 className={styles.h3_banner}>{dataText ? dataText['1.1'] : ''}</h3>
                        <span className={styles.text_banner}>{dataText ? dataText['1.2'] : ''}</span>
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