import React, {useState} from 'react';
import styles from './Navigation.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {Path} from "../../constants/path";
import {useAppSelector} from "../../redux/store";

export const Navigation = () => {

  const location = useLocation()
  const isLogged = useAppSelector(state => state.auth.isLogged)
  const [navShow, setNavShow] = useState(false)

  const handleShowNav = () => {
    setNavShow(!navShow)
  }

  return (
    <>
      <div className={styles.menu}>
        <button onClick={handleShowNav}>Меню</button>
      </div>
      <nav className={`${styles.navigation} ${navShow ? styles.active : ''}`}>
        {location.pathname === '/' && <NavLink to={''} className={styles.link}>
          О нас
        </NavLink>}
        <NavLink to={''} className={styles.link}>
          Задания
        </NavLink>
        {isLogged && <>
          <NavLink to={''} className={styles.link}>
            Резюме
          </NavLink>
          <NavLink to={''} className={styles.link}>
            Визитка
          </NavLink>
        </>}
        {isLogged ?
          <NavLink to={Path.PROFILE} className={styles.link}>
            Мой кабинет
          </NavLink>
          :
          <NavLink to={Path.AUTH} className={styles.link}>
            Войти
          </NavLink>
        }
      </nav>
    </>
  );
};
