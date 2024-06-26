import { NavLink } from 'react-router-dom';
import styles from '../MainPage.module.scss';
import { Path } from '../../constants/path';
import CommonButton from '../../../UI/CommonButton/CommonButton';

function LastSection() {
  return (
    <section className={`${styles.sectionDark} ${styles.sectionLast}`}>
      <span>
        Проверь насколько ты готов к
        <br />
        карьерному росту
      </span>
      <h3>
        Узнай уровень своей
        <br />
        прожарки
      </h3>
      <NavLink to={Path.REGISTRATION}>
        <CommonButton variant="primary" className={styles.button}>
          Регистрация
        </CommonButton>
      </NavLink>
    </section>
  );
}

export default LastSection;
