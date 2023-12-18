import {Container, Row, Col} from "react-bootstrap";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import styles from "./Footer.module.css";
import React from "react";

type PropsType = {
  mainPageData: any;
}

const Footer:React.FC<PropsType> = ({mainPageData}) => {


  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col md="3">
            <div className={styles.right_block}>
              <a href="mailto:train.lab@gmail.com">
                <div className={styles.email}>train.lab@gmail.com</div>
              </a>

              <div className={`${styles.icons} flex flex-row `}>
                <a href="https://www.linkedin.com/company/train-lab-interns/mycompany/" target='_blank'>
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
              <a href="src/components/Footer/Footer#" className={styles.tooltip}
                 data-tooltip="здесь будет переход на страницу о защите персональных данных">
                <div>Персональные данные</div>
              </a>
              <div>{mainPageData ? mainPageData['1.9'] : ''}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
