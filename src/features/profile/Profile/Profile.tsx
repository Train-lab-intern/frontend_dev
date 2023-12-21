import React, {useState} from 'react';
import styles from './Profile.module.scss'
import diagram from '../../../assets/img/diagram.png'
import Footer from "../../../components/Footer/Footer";
import {useAppSelector} from "../../../redux/store";
import {Header} from "../../../components/Header/Header";
import {iconProfile} from "../../../assets/icons/iconProfile";

export const Profile = () => {

  const {email, username, id} = useAppSelector(state => state.auth.userData)

  const [activeStat, setActiveStat] = useState('statOne')

  const handleActiveStat = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActiveStat(e.currentTarget.id)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.section}>
            <div className={styles.statDiagram}>
              <div className={styles.avatar}>
                {/*<img src={''} alt="avatar"/>*/}
                {iconProfile}
              </div>
              <div className={styles.userInfo}>
                <h2 className={styles.name}>{username}</h2>
                <h3 className={styles.specialization}>Специальность</h3>
              </div>
              <div className={styles.title}>
                <span>здесь будет статистика по выполнению задания</span>
              </div>
              <div className={styles.diagram}>
                <img src={diagram} alt="diagram"/>
              </div>
            </div>
            <div className={styles.statNav}>
              <div
                className={`${styles.item} ${styles.one} ${activeStat === 'statOne' ? styles.active : ''}`}
                id='statOne'
                onClick={handleActiveStat}
              >
                <span>информация по статистике выполненных мной заданий</span>
              </div>
              <div
                className={`${styles.item} ${styles.two} ${activeStat === 'statTwo' ? styles.active : ''}`}
                id='statTwo'
                onClick={handleActiveStat}
              >
                <span>информация по статистике выполненных мной заданий</span>
              </div>
              <div
                className={`${styles.item} ${styles.three} ${activeStat === 'statThree' ? styles.active : ''}`}
                id='statThree'
                onClick={handleActiveStat}
              >
                <span>информация по статистике выполненных мной заданий</span>
              </div>
              <div
                className={`${styles.item} ${styles.four} ${activeStat === 'statFour' ? styles.active : ''}`}
                id='statFour'
                onClick={handleActiveStat}
              >
                <span>информация по статистике выполненных мной заданий</span>
              </div>
              <div className={styles.recommendations}>
                <span>
                  здесь будут советы и ссылки на интересные для пользователя ресурсы
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer mainPageData={[]} />
      </div>
    </div>
  );
}