import React from 'react';
import styles from './Navigation.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {Path} from "../../pages/constants/path";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {logout} from "../../modules/auth/authReducer";
import {CommonButton} from "../../UI/CommonButton/CommonButton";
import {iconBurgerMenu} from "../../assets/icons/iconBurgerMenu";
import {NavigationMobile} from "./NavigationMobile";

export const Navigation = () => {

  const dispatch = useAppDispatch()
  const {pathname} = useLocation()
  const isLogged = useAppSelector(state => state.auth.isLogged)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <NavigationMobile />
      <nav className={styles.navigation}>
        {pathname === '/' && <NavLink to={''} className={styles.link}>
          О&nbsp;нас
        </NavLink>}
        <NavLink to={''} className={styles.link}>
          Меню тестов
        </NavLink>
        <NavLink to={''} className={styles.link}>
          Резюме
        </NavLink>
        {isLogged ?
          <div className={styles.linksProfile}>
            <CommonButton variant={'outline'} onClick={handleLogout} className={styles.button}>
              Выйти
            </CommonButton>
            {pathname === Path.PROFILE ?
              <NavLink to={Path.PROFILE_SETTINGS}>
                <CommonButton variant={'primary'} className={styles.button}>
                  Настройки
                </CommonButton>
              </NavLink> :
              <NavLink to={Path.PROFILE}>
                <CommonButton variant={'primary'} className={styles.button}>
                  Мой кабинет
                </CommonButton>
              </NavLink>
            }
          </div>
          :
          <div className={styles.linksProfile}>
            <NavLink to={Path.AUTH}>
              <CommonButton variant={'outline'} className={styles.button}>
                Войти
              </CommonButton>
            </NavLink>
            <NavLink to={Path.REGISTRATION}>
              <CommonButton variant={'primary'} className={styles.button}>
                Регистрация
              </CommonButton>
            </NavLink>
          </div>
        }
      </nav>
    </>
  );
};
