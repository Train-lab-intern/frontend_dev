import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/OurFeatures.module.css'


interface Props {
    mainPageData: any;
};

function OurFeatures({ mainPageData }:Props) {


    return (
        <div>
            <div className={styles.wrapper}>
                <Container >
                    <Row>
                        <Col className={styles.col}><div className={styles.block_1}><span>{mainPageData ? mainPageData['1.3'] : ''}</span></div></Col>
                        <Col className={styles.col}><div className={styles.block_2}><span>{mainPageData ? mainPageData['1.4'] : ''}</span></div></Col>
                        <Col className={styles.col}><div className={styles.block_3}><span>{mainPageData ? mainPageData['1.5'] : ''}</span></div></Col>
                        <Col className={styles.col}><div className={styles.block_2}><span>{mainPageData ? mainPageData['1.6'] : ''}</span></div></Col>
                        <Col className={styles.col}><button className={styles.btn}>Задай нам  вопрос</button></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default OurFeatures;