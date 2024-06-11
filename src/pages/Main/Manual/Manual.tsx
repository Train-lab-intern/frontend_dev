import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../MainPage.module.scss';
import iconManual001 from '../../../assets/icons/icon_manual_001.png';
import iconManual002 from '../../../assets/icons/icon_manual_002.png';
import iconManual003 from '../../../assets/icons/icon_manual_003.png';
import iconManual004 from '../../../assets/icons/icon_manual_004.png';
import { Path } from '../../constants/path';
import CommonButton from '../../../UI/CommonButton/CommonButton';

export function Manual() {
  return (
    <section className={styles.sectionDark}>
      <div className={styles.container}>
        <div className={styles.manual}>
          <div className={styles.title}>
            <h2>Как это работает</h2>
          </div>
          <div className={styles.manualList}>
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={iconManual001} alt="icon" />
              </div>
              <span>1. Присоединяйся к IT Roast</span>
            </div>
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={iconManual002} alt="icon" />
              </div>
              <span>2. Выполняй задания и тренируйся</span>
            </div>
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={iconManual003} alt="icon" />
              </div>
              <span>
                3. Следи за статистикой и определи свой уровень прожарки
              </span>
            </div>
            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={iconManual004} alt="icon" />
              </div>
              <span>4. Поделись знаниями и найди работу мечты</span>
            </div>
          </div>
          <NavLink to={Path.REGISTRATION}>
            <CommonButton variant="primary">Регистрация</CommonButton>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
export default Manual;
