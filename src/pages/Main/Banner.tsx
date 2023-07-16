import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/Banner.module.css'

interface Props {
    mainPageData: any;
};

function Banner({ mainPageData }:Props) {

    return (
        <Container >
            <div className={styles.wrapper}>
                <Row className={styles.row_banner}>
                    <Col md={6}>
                        <h3 className={styles.h3_banner}>{mainPageData ? mainPageData['1.1'] : ''}</h3>
                        <span className={styles.text_banner}>{mainPageData ? mainPageData['1.2'] : ''}</span>
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