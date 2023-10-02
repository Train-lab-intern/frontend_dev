import React, {useState} from 'react';
import styles from './ProfilePage.module.scss'
import logo from '../../assets/img/logo.jpg'
import avatar from '../../assets/img/avatar.png'
import diagram from '../../assets/img/diagram.png'
import Footer from "../../components/Footer/Footer";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Path} from "../../constants/path";
import {logout} from "../../redux/reducers/authReducer";

export const ProfilePage = () => {

  const dispatch = useAppDispatch()
  const {email, username, id} = useAppSelector(state => state.auth.userData.userDto)

  const [activeStat, setActiveStat] = useState('statOne')

  const handleActiveStat = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActiveStat(e.currentTarget.id)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <NavLink to={Path.HOME}>
                <img src={logo} alt="logo"/>
              </NavLink>
            </div>
            <nav className={styles.navigation}>
              <span className="d-flex justify-content-end ">
                <NavLink to='' className={styles.tooltip}
                   data-tooltip="здесь будет переход на страницу с примерами заданий">
                  <button className='btn btn-secondary'>Задания</button>
                </NavLink>
              </span>
              <span className="d-flex justify-content-end ">
                <NavLink to='' className={styles.tooltip}
                   data-tooltip="здесь будет переход на страницу резюме">
                  <button className='btn btn-secondary'>Резюме</button>
                </NavLink>
              </span>
              <span className="d-flex justify-content-end ">
                <NavLink to='' className={styles.tooltip}
                   data-tooltip="здесь будет переход на страницу с визиткой">
                  <button className='btn btn-secondary'>Визитка</button>
                </NavLink>
              </span>
              <button
                className='btn btn-secondary'
                onClick={handleLogout}
              >Выйти</button>
              <span className="d-flex justify-content-end ">
                <NavLink to='' className={styles.tooltip}
                   data-tooltip="здесь будет переход на страницу настроек профиля">
                  <button className='btn btn-secondary'>Настройки</button>
                </NavLink>
              </span>
            </nav>
          </header>
          <div className={styles.section}>
            <div className={styles.statDiagram}>
              <div className={styles.avatar}>
                <img src={avatar} alt="avatar"/>
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