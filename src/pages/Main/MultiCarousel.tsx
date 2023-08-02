import styles from "../../styles/Block.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import "./../../index.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};


function MultiCarousel() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Carousel
          responsive={responsive}

        >
          <div className={styles.cart}>
            <h3>SQL</h3>
            <p>Какой оператор позволяет создать таблицу?</p>
          </div>
          <div className={styles.cart}>
            <h3>Python</h3>
            <p>Как получить остаток от деления в Python?</p>
          </div>
          <div className={styles.cart}>
            <h3>JavaScript</h3>
            <p>В чем отличия между глобальной и локальной переменными?</p>
          </div>

        </Carousel>
      </div>
    </Container>
  );
}

export default MultiCarousel;
