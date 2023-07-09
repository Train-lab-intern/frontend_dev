import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/Banner.module.css'

function Banner() {
    return (
        <Container>
            <div className={styles.wrapper}>
                <Row className={styles.row_banner}>
                    <Col md={6}>
                        <h3 className={styles.h3_banner}>Создай свой успех</h3>
                        <span className={styles.text_banner}>Наши тренажеры разработаны на основе тестовых заданий работодателей. выполняя задания и зарабатывая баллы, ты найдешь работу мечты</span>
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