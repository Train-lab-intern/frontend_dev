import {Container, Row, Col} from "react-bootstrap";
import styles from './Banner.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import {Path} from "../../constants/path";
//title - 1.1
//text - 1.2
type PropsType = {
  title: string
  text: string
};

const Banner:React.FC<PropsType> = ({title, text}) => {

  return (
    <Container>
      <div className={styles.wrapper}>
        <Row className={styles.row_banner}>
          <Col md={6}>
            <h3 className={styles.h3_banner}>{title ? title : ''}</h3>
            <span className={styles.text_banner}>{text ? text : ''}</span>
          </Col>
          <Col md={4} className={styles.col_banner_btn}>
            <NavLink to={Path.REGISTRATION} className={styles.tooltip}
               data-tooltip="здесь будет переход на страницу регистрации">
              <button className={styles.btn_banner}>Начать путь</button>
            </NavLink>

          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Banner;