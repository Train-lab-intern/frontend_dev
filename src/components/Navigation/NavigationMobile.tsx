import React, {useState} from 'react';
import styles from './NavigationMobile.module.scss'
import {iconBurgerMenu} from "../../assets/icons/iconBurgerMenu";
import {NavLink} from "react-router-dom";
import {Path} from "../../constants/path";

export const NavigationMobile = () => {

  const [menuIsActive, setMenuIsActive] = useState(false)

  const handleOpenMenu = () => {
    setMenuIsActive(!menuIsActive)
  }

  const menuStyle = `
    ${styles.navigationMobile} ${menuIsActive ? styles.active : ''}
  `

  return (
    <nav className={menuStyle}>
      <div
        className={styles.iconMenu}
        onClick={handleOpenMenu}
      >
        {iconBurgerMenu}
      </div>
      <div className={styles.navList}>
        <NavLink to={''}>О нас</NavLink>
        <NavLink to={''}>Меню тестов</NavLink>
        <NavLink to={''}>Резюме</NavLink>
        <NavLink to={Path.REGISTRATION}>Регистрация</NavLink>
        <NavLink to={Path.AUTH}>Войти</NavLink>
      </div>
    </nav>
  );
}