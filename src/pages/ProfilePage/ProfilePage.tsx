import React, {useState} from 'react';
import styles from './ProfilePage.module.scss'
import logo from '../../img/logo.jpg'
import avatar from '../../img/avatar.png'
import diagram from '../../img/diagram.png'
import Footer from "../Main/Footer";
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export const ProfilePage = () => {

  const [activeStat, setActiveStat] = useState('statOne')

  const handleActiveStat = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActiveStat(e.currentTarget.id)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <NavLink to={'/'}>
                <img src={logo} alt="logo"/>
              </NavLink>
            </div>
            <nav className={styles.navigation}>
              <Nav.Link href="#tasks" className="d-flex justify-content-end ">
                <NavLink to='' className={styles.tooltip}
                   data-tooltip="здесь будет переход на страницу с примерами заданий">
                  <button className='btn btn-secondary'>Задания</button>
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#tasks" className="d-flex justify-content-end ">
                <NavLink to='' className={styles.tooltip}
                   data-tooltip="здесь будет переход на страницу резюме">
                  <button className='btn btn-secondary'>Резюме</button>
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#tasks" className="d-flex justify-content-end ">
                <NavLink to='' className={styles.tooltip}
                   data-tooltip="здесь будет переход на страницу с визиткой">
                  <button className='btn btn-secondary'>Визитка</button>
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#tasks" className="d-flex justify-content-end ">
                <NavLink to='' className={styles.tooltip}
                   data-tooltip="здесь будет переход на страницу настроек профиля">
                  <button className='btn btn-secondary'>Настройки</button>
                </NavLink>
              </Nav.Link>
            </nav>
          </header>
          <div className={styles.section}>
            <div className={styles.statDiagram}>
              <div className={styles.avatar}>
                <img src={avatar} alt="avatar"/>
              </div>
              <div className={styles.userInfo}>
                <h2 className={styles.name}>Фамилия Имя</h2>
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

      <Footer mainPageData={[]} />
    </div>
  );
}