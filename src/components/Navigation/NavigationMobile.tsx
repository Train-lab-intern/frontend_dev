import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationMobile.module.scss';
import { Path } from '../../pages/constants/path';

export default function NavigationMobile() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsActive(!menuIsActive);
  };

  const menuStyle = `
    ${styles.navigationMobile} ${menuIsActive ? styles.active : ''}
  `;

  return (
    <nav className={menuStyle}>
      <div className={styles.iconMenu} onClick={handleOpenMenu}>
        <div className={styles.line} />
      </div>
      <div className={styles.navList}>
        <NavLink to="" className={styles.link}>
          О нас
        </NavLink>
        <NavLink to="" className={styles.link}>
          Меню тестов
        </NavLink>
        <NavLink to="" className={styles.link}>
          Резюме
        </NavLink>
        <NavLink to={Path.REGISTRATION} className={styles.link}>
          Регистрация
        </NavLink>
        <NavLink to={Path.AUTH} className={styles.link}>
          Войти
        </NavLink>
      </div>
    </nav>
  );
}
