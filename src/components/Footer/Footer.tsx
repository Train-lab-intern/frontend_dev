/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../assets/img/logo_footer.png';
import githubIcon from '../../assets/icons/githubIcon';
import { linkedinIcon } from '../../assets/icons/linkedinIcon';
import iconSearch from '../../assets/icons/iconSearch';

type PropsType = {
  mainPageData: any;
};

export const Footer: React.FC<PropsType> = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <NavLink to=""> О нас</NavLink>
            </li>
            <li>
              <NavLink to="">Продегустируй бесплатно</NavLink>
            </li>
            <li>
              <NavLink to="">Меню тестов</NavLink>
            </li>
            <li>
              <NavLink to="">Обратная связь</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.search}>
          <span>Поиск по сайту</span>
          <label>
            <input type="text" placeholder="введите текст" />
            <span className={styles.iconSearch}>{iconSearch}</span>
          </label>
        </div>
        <div className={styles.links}>
          <div className={styles.iconLinks}>
            <a href="">{githubIcon}</a>
            <a href="">{linkedinIcon}</a>
          </div>
          <div className={styles.mail}>
            <a href="mailto:train-lab@gmail.com">train-lab@gmail.com</a>
          </div>
        </div>
        <div className={styles.info}>
          <span>© 2023 ООО “ХХХХХХХХ” </span>
          <p>
            Все права защищены. Любое использование либо копирование материалов
            и (или) подборки материалов сайта, элементов дизайна и оформления
            допускается лишь с письменного разрешения правообладателя и только
            со ссылкой на источник: URL
          </p>
        </div>
      </div>
    </div>
  </footer>
);
