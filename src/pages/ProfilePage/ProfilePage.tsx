import React from 'react';
import styles from './ProfilePage.module.scss'
import logo from '../../img/logo.jpg'
import avatar from '../../img/avatar.png'
import diagram from '../../img/diagram.png'
import Footer from "../Main/Footer";
import {NavLink} from "react-router-dom";

export const ProfilePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <img src={logo} alt="logo"/>
            </div>
            <nav className={styles.navigation}>
              <NavLink to={''}>Задания</NavLink>
              <NavLink to={''}>Резюме</NavLink>
              <NavLink to={''}>Визитка</NavLink>
              <NavLink to={''}>Настройки</NavLink>
            </nav>
          </header>
          <div className={styles.section}>
            <div className={styles.statDiagram}>
              <div className={styles.avatar}>
                <img src={avatar} alt="avatar"/>
              </div>
              <div className={styles.userInfo}>
                <h2 className={styles.name}>Name</h2>
                <h3 className={styles.specialization}>Specialization</h3>
              </div>
              <div className={styles.title}>
                <span>здесь будет статистика по выполнению задания</span>
              </div>
              <div className={styles.diagram}>
                <img src={diagram} alt="diagram"/>
              </div>
            </div>
            <div className={styles.statNav}>
              <div className={`${styles.item} ${styles.one}`}>
                <span>информация по статистике выполненных мной заданий</span>
              </div>
              <div className={`${styles.item} ${styles.two}`}>
                <span>информация по статистике выполненных мной заданий</span>
              </div>
              <div className={`${styles.item} ${styles.three}`}>
                <span>информация по статистике выполненных мной заданий</span>
              </div>
              <div className={`${styles.item} ${styles.four}`}>
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

      <Footer mainPageData={[]} />
    </div>
  );
}