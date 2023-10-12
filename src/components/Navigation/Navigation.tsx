import React, {useState} from 'react';
import styles from './Navigation.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {Path} from "../../constants/path";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {iconLogout} from "../../assets/icons/iconLogout";
import {logout} from "../../features/auth/authReducer";

export const Navigation = () => {

  const dispatch = useAppDispatch()
  const {pathname} = useLocation()
  const isLogged = useAppSelector(state => state.auth.isLogged)
  const [navShow, setNavShow] = useState(false)

  const handleShowNav = () => {
    setNavShow(!navShow)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <div className={styles.menu}>
        <button onClick={handleShowNav} className={styles.link}>Меню</button>
      </div>
      <nav className={`${styles.navigation} ${navShow ? styles.active : ''}`}>
        {pathname === '/' && <NavLink to={''} className={styles.link}>
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
          <div className={styles.linksProfile}>
            <button onClick={handleLogout} className={styles.logout}>Выйти {iconLogout}</button>
            {pathname === Path.PROFILE ?
              <NavLink to={''} className={styles.link}>
                Настройки
              </NavLink> :
              <NavLink to={Path.PROFILE} className={styles.link}>
                Мой кабинет
              </NavLink>
            }
            <button onClick={handleLogout} className={styles.logoutResponsive}>Выйти {iconLogout}</button>
          </div>
          :
          <div className={styles.linksProfile}>
            <NavLink to={Path.AUTH} className={styles.link}>
              Войти
            </NavLink>
          </div>
        }
      </nav>
    </>
  );
};
