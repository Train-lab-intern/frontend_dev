import React from "react";
import {Container} from "react-bootstrap";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo.jpg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from 'react-router-dom'
import {Path} from "../../constants/path";
import {useAppSelector} from "../../redux/store";


function Header() {

  const isLogged = useAppSelector(state => state.auth.isLogged)

  return (
    // Компонент верхней панели навигации
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Логотип */}
        <NavLink to={Path.HOME}>
          <img src={logo} alt="Logo"/>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle_button}/>

        <Navbar.Collapse id="basic-navbar-nav" className={styles.navItems}>
          <Nav className=" nav me-auto ms-auto">
            {/* Ссылки навигации */}
            <NavLink
              to={''}
              className={styles.tooltip}
              data-tooltip="здесь будет переход на страницу с информацией о приложении"
            >
              <button className='btn btn-secondary'>О нас</button>
            </NavLink>

            <NavLink
              to={''}
              className={`d-flex justify-content-end ${styles.tooltip}`}
              data-tooltip="здесь будет переход на страницу с примерами заданий"
            >
              <button className='btn btn-secondary'>Задания</button>
            </NavLink>
            <NavLink
              to={''}
              className={`d-flex justify-content-end ${styles.tooltip}`}
              data-tooltip="здесь будет переход на страницу резюме"
            >
              <button className='btn btn-secondary'>Резюме</button>
            </NavLink>
            <NavLink
              to={''}
              className={`d-flex justify-content-end ${styles.tooltip}`}
              data-tooltip="здесь будет переход на страницу с визиткой"
            >
              <button className='btn btn-secondary'>Визитка</button>
            </NavLink>
          </Nav>

          <Nav className="ms-auto">
            {/* Ссылки навигации */}
            {isLogged ?
              <NavLink to={Path.PROFILE}>
                <button
                  className='btn btn-secondary'
                >Мой кабинет</button>
              </NavLink>
               :
              <NavLink to={Path.AUTH}>
                <button className='btn btn-secondary'>Войти</button>
              </NavLink>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
