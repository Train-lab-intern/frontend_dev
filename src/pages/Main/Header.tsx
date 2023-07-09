import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import styles from '../../styles/Header.module.css'
import logo from '../../img/logo.jpg'

function Header() {
    return (
        <div>
            <Container>
                <Row className={styles.wrapper}>
                    <Col>
                        <div className={styles.logo}>
                            <img src={logo} alt="Logo"/>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.nav_1}>
                            <button>О нас</button>
                            <button>Задания</button>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.nav_2}>
                            <button>Войти</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;