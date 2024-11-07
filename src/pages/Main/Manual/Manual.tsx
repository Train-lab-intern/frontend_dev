import { NavLink } from 'react-router-dom';
import styles from '../MainPage.module.scss';
import iconManualStart from '../../../assets/icons/iconManualJoinITRoast.png';
import iconManualTrain from '../../../assets/icons/iconManualTrain.png';
import iconManualCheck from '../../../assets/icons/iconManualСheckStatistic.png';
import iconManualShare from '../../../assets/icons/iconManualShare.png';
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
                <img src={iconManualStart} alt="icon" />
              </div>
              <span>Присоединяйся к IT Roast</span>
            </div>

            <div className={styles.dashedLine} />

            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={iconManualTrain} alt="icon" />
              </div>
              <span>Выполняй задания и тренируйся</span>
            </div>

            <div className={styles.dashedLine} />

            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={iconManualCheck} alt="icon" />
              </div>
              <span>Определи свой уровень прожарки</span>
            </div>

            <div className={styles.dashedLine} />

            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <img src={iconManualShare} alt="icon" />
              </div>
              <span>Поделись знаниями и найди работу мечты</span>
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
