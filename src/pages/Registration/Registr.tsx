import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/Auth/Auth.module.css'
import Logo from '../../img/fullLogo.jpg'


function Auth() {
    const [googleAccaunt, setGoogleAccaaunt] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    function handleClick(googleAccaunt: string, username: string, password: string) {

    }

    console.log(googleAccaunt)

    return (
        <div className={styles.auth}>
            <Container>
                <div>
                    {/* Обертка */}
                    <Col className={styles.wrapper}>
                        {/* Логотип */}
                        <Row className={styles.row}><a href="/"><img src={Logo} alt="Logo"/></a></Row>

                        {/* Заголовок */}
                        <Row className={styles.row}><h1 className={styles.headText} style={{textAlign: 'center'}}>Мы
                            рады видеть вас</h1></Row>


                        {/* Вход через Google */}
                        <Row className={styles.row}><input className={styles.input} type="email"
                                                           placeholder='Войти с Google'
                                                           onChange={e => setGoogleAccaaunt(e.target.value)}/></Row>


                        {/* Разделитель "ИЛИ" */}
                        <Row className={styles.row}>
                            <div className={styles.or_hr}>
                                <hr className={styles.hr}/>
                                <span className={styles.or}>или</span>
                                <hr className={styles.hr}/>
                            </div>
                        </Row>


                        {/* Поле ввода логина */}
                        <Row className={styles.row}><input className={styles.input} type="text" placeholder='Логин'
                                                           onChange={e => setUsername(e.target.value)}/></Row>
                        <br/>


                        {/* Поле ввода пароля */}
                        <Row className={styles.row}><input className={styles.input} type="password" name="password"
                                                           autoComplete="current-password" id="id_password"
                                                           placeholder='Пароль'
                                                           onChange={e => setPassword(e.target.value)}/>
                        </Row>


                        <Row className={styles.row}><input className={styles.input} type="password" name="password"
                                                           autoComplete="current-password" id="id_password"
                                                           placeholder='Пароль'
                                                           onChange={e => setPassword(e.target.value)}/>
                        </Row>


                            <br/>


                            {/* Кнопка "Войти" */}
                            <Row className={styles.row}>
                                <button className={styles.input}>Зарегистрироватся</button>
                            </Row>
                            <br/>







                        {/* Вопросы */}
                        <Row className={styles.row}>
                            <Col className={styles.textAccaunt}>Остались вопросы? </Col>
                            <Col md={8}><a className={styles.linkPink} href="#">Спроси нас!</a></Col>
                        </Row>
                        <br/>

                        {/* Соглашение на обработку данных */}
                        <Row className={styles.row}><p>Нажимая кнопку «Войти», вы подтверждаете своё согласие с
                            условиями обработки данных.</p></Row>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Auth;
