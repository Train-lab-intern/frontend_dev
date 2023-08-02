import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import styles from "../../styles/Header.module.css";
import logo from "../../img/logo.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom'


function Header() {
    return (
        // Компонент верхней панели навигации
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* Логотип */}
                <Navbar.Brand href="#home">
                    <a href="/">
                        <img src={logo} alt="Logo"/>
                    </a>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle_button}/>


                <Navbar.Collapse id="basic-navbar-nav" className={styles.navItems}>
                    <Nav className=" nav me-auto ms-auto">
                        {/* Ссылки навигации */}
                        <Nav.Link href="#about">
                            <a href="#" className={styles.tooltip}
                               data-tooltip="здесь будет переход на страницу с информацией о приложении">
                                <button className='btn btn-secondary'>О нас</button>
                            </a>
                        </Nav.Link>
                        
                        <Nav.Link href="#tasks" className="d-flex justify-content-end ">
                            <a href="#" className={styles.tooltip}
                               data-tooltip="здесь будет переход на страницу с примерами заданий">
                                <button className='btn btn-secondary'>Задания</button>
                            </a>

                        </Nav.Link>
                    </Nav>

                    <Nav className=" ms-auto">
                        {/* Ссылки навигации */}
                        <Nav.Link href="#signin">
                            <Link to="/auth" className={styles.tooltip}
                                  data-tooltip="здесь будет переход на страницу авторизации">
                                <button className='btn btn-secondary'>Войти</button>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
