import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from './OurFeatures.module.css'


type PropsType = {
  items: string[];
};

const OurFeatures: React.FC<PropsType> = ({items}) => {

  return (
    <div>
      <div className={styles.wrapper}>
        <Container>
          <Row>
            {items && items.map((item, i) => (
              <Col className={styles.col} key={i}>
                <div className={i % 2 === 0 ? styles.block_2 : styles.block_1}>
                  <span>{item}</span>
                </div>
              </Col>
            ))
            }
            <Col className={styles.col}>
              <a href="#" className={styles.tooltip}
                 data-tooltip="здесь будет возможно инициировать получение обратной связи">
                <button className={`${styles.btn} btn btn-secondary`}>Задай нам вопрос</button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default OurFeatures;