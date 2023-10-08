import React from "react";
import {Container} from "react-bootstrap";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.jpg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink, useLocation} from 'react-router-dom'
import {Path} from "../../constants/path";
import {useAppSelector} from "../../redux/store";
import {Navigation} from "../Navigation/Navigation";


export const Header = () => {

  // const location = useLocation()
  // const isLogged = useAppSelector(state => state.auth.isLogged)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <NavLink to={Path.HOME}>
              <img src={logo} alt="Logo"/>
            </NavLink>
          </div>
          <div className={styles.nav}>
            <Navigation />
          </div>
          {/*<nav className={styles.navigation}>*/}
          {/*  {location.pathname === '/' && <NavLink to={''} className={styles.link}>*/}
          {/*    О нас*/}
          {/*  </NavLink>}*/}
          {/*  <NavLink to={''} className={styles.link}>*/}
          {/*    Задания*/}
          {/*  </NavLink>*/}
          {/*  {isLogged && <>*/}
          {/*    <NavLink to={''} className={styles.link}>*/}
          {/*      Резюме*/}
          {/*    </NavLink>*/}
          {/*    <NavLink to={''} className={styles.link}>*/}
          {/*      Визитка*/}
          {/*    </NavLink>*/}
          {/*  </>}*/}
          {/*  {isLogged ?*/}
          {/*    <NavLink to={Path.PROFILE} className={styles.link}>*/}
          {/*      Мой кабинет*/}
          {/*    </NavLink>*/}
          {/*    :*/}
          {/*    <NavLink to={Path.AUTH} className={styles.link}>*/}
          {/*      Войти*/}
          {/*    </NavLink>*/}
          {/*  }*/}
          {/*</nav>*/}
        </div>
      </div>
    </header>
  );
}