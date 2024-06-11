import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../MainPage.module.scss';
import { Slider } from '../Slider/Slider';
import { Path } from '../../constants/path';
import CommonButton from '../../../UI/CommonButton/CommonButton';

function TestMenu() {
  return (
    <section className={`${styles.sectionLight} ${styles.sectionTestMenu}`}>
      <div className={styles.container}>
        <div className={styles.testMenu}>
          <Slider />
          {/* <div className={styles.testMenuImgContainer}> */}
          {/*  <img src={test_menu} alt="test menu"/> */}
          {/* </div> */}
          <div className={styles.progressBlock}>
            <div className={styles.title}>
              <h2>Следи за своим успехом</h2>
            </div>
            <div className={styles.item1} />
            <div className={styles.item2} />
          </div>
          <div className={styles.title}>
            <h2>Устрой прожарку своей карьеры</h2>
            <h3>Получи сертификат</h3>
            <NavLink to={Path.REGISTRATION}>
              <CommonButton variant="primary">Регистрация</CommonButton>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TestMenu;
