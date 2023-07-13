import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/OurFeatures.module.css'
import axios from "axios";

function OurFeatures() {
    const [dataText, setDataText] = useState()

    useEffect(() => {
        axios.get("https://back-test-4zwpv.ondigitalocean.app/front/main-page")
            .then(data => setDataText(data.data))
    },[])


    return (
        <div>
            <div className={styles.wrapper}>
                <Container >
                    <Row>
                        <Col className={styles.col}><div className={styles.block_1}><span>{dataText ? dataText['1.3'] : ''}</span></div></Col>
                        <Col className={styles.col}><div className={styles.block_2}><span>{dataText ? dataText['1.4'] : ''}</span></div></Col>
                        <Col className={styles.col}><div className={styles.block_3}><span>{dataText ? dataText['1.5'] : ''}</span></div></Col>
                        <Col className={styles.col}><div className={styles.block_2}><span>{dataText ? dataText['1.6'] : ''}</span></div></Col>
                        <Col className={styles.col}><button className={styles.btn}>Задай нам  вопрос</button></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default OurFeatures;