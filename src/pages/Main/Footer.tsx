import {Container, Row, Col} from "react-bootstrap";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import styles from "../../styles/Footer.module.css";
import {useEffect, useState} from "react";

interface Props {
    mainPageData: any;
};

function Footer({ mainPageData }:Props) {


    return (
        <div className={styles.footer}>
            <Container >
                <Row>
                    <Col md="3">
                        <div className={styles.right_block}>
                            <a href="train.lab@gmail.com">
                                <div className={styles.email}>train.lab@gmail.com</div>
                            </a>

                            <div className={styles.icons}>
                                <a href="https://www.linkedin.com/company/train-lab-interns/mycompany/">
                                    <img src={linkedin} alt="linkedin"/>
                                </a>
                                <a href="https://github.com/Train-lab-intern"><img src={github} alt="github"/></a>
                            </div>
                        </div>
                    </Col>


                    <Col md="6">
                        <p className={styles.rights}> Все права защищены. Любое использование либо копирование
                            материалов
                            и (или) подборки материалов сайта, элементов дизайна и оформления
                            допускается лишь с письменного разрешения правообладателя и только
                            со ссылкой на источник: URL</p>
                    </Col>


                    <Col md="3">
                        <div className={styles.right_block}>
                            <div>Персональные данные</div>
                            <div>{mainPageData ? mainPageData['1.9'] : ''}</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
