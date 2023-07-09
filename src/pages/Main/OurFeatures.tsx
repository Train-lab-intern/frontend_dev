import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/OurFeatures.module.css'

function OurFeatures() {
    return (
        <div>
            <div className={styles.wrapper}>
                <Container >
                    <Row>
                        <Col className={styles.col}><div className={styles.block_1}><span>Выполни задания</span></div></Col>
                        <Col className={styles.col}><div className={styles.block_2}><span>Собирай баллы</span></div></Col>
                        <Col className={styles.col}><div className={styles.block_3}><span>Повышай  рейтинг</span></div></Col>
                        <Col className={styles.col}><div className={styles.block_2}><span>Твоя работа найдет тебя</span></div></Col>
                        <Col className={styles.col}><button className={styles.btn}>Задай нам  вопрос</button></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default OurFeatures;