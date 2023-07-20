import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/Auth/Auth.module.css';
import Logo from '../../img/fullLogo.jpg';
import { Link} from 'react-router-dom';
import { Field, Formik, Form, FormikHelpers } from 'formik';

interface Values {
    email: string,
    username: string,
    password: string
}

// function validateEmail(value) {
//     if (!value) {
//         return 'Required';
//     } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(value)) {
//         return 'Invalid email address';
//     }
// }

// function validatePassword(value) {
//     if (!value) {
//         return 'Required'
//     }
// }

// function validateUserName(value) {
//     if (!value) {
//         return 'Required'
//     }
// }

function Auth() {
    const [googleAccaunt, setGoogleAccaaunt] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    function handleClick(googleAccaunt: string, username: string, password: string) {

    }

    console.log(googleAccaunt)

    return (
        <>
        <Formik
            initialValues={{
                email: '',
                username: '',
                password: '',
            }}
            // validate = {values => {
            //     const errors = {}
            //     if (!values.email) {
            //         errors.email = 'Required'
            //     } else if (
            //         !/^[A-Z0-9._%+-]+@[A-Zo-9.-]+\.[A-Z]{2,}$/i.test(values.email) 
            //     ) {
            //         errors.email = 'Invalid email address'
            //     }
            //     return errors
            // }}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 500);
              }}>

            {({errors, touched}) => (
            <Form>
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
                                <Row className={styles.row}>
                        
                                    <Field className={styles.input}
                                        name='email'
                                        type='email'
                                        placeholder='Войти с Google'
                                        // validate={validateEmail}
                                    />
                                    {errors.email && touched.email && (
                                        <div>{errors.email}</div>
                                    )}

                                    {/* <input className={styles.input} type="email"
                                        placeholder='Войти с Google'
                                        onChange={e => setGoogleAccaaunt(e.target.value)}
                                    /> */}

                                </Row>


                                {/* Разделитель "ИЛИ" */}
                                <Row className={styles.row}>
                                    <div className={styles.or_hr}>
                                        <hr className={styles.hr}/>
                                        <span className={styles.or}>или</span>
                                        <hr className={styles.hr}/>
                                    </div>
                                </Row>


                                {/* Поле ввода логина */}
                                <Row className={styles.row}>
                                    
                                    <Field className={styles.input}
                                        name='userName'
                                        type='text'
                                        placeholder='Логин'
                                        // validate={validateUserName}
                                    />
                                    {errors.username && touched.username && (
                                        <div>{errors.username}</div>
                                    )}

                                    {/* <input className={styles.input} type="text" placeholder='Логин'
                                        onChange={e => setUsername(e.target.value)}
                                    /> */}

                                </Row>
                                <br/>


                                {/* Поле ввода пароля */}
                                <Row className={styles.row}>
                                    
                                    <Field className={styles.input}
                                        name='password'
                                        type='password'
                                        placeholder='Пароль'
                                        // validate={validatePassword}
                                    />
                                    {errors.password && touched.password && (
                                        <div>{errors.password}</div>
                                    )}
                                    
                                    {/* <input className={styles.input} type="password" name="password"
                                        autoComplete="current-password" id="id_password"
                                        placeholder='Пароль' onChange={e => setPassword(e.target.value)}
                                    /> */}


                                    {/* Кнопка "Войти" */}
                                    <Row className={styles.row}>
                                        <button className={styles.input}>Войти</button>
                                    </Row>
                                    <br/>


                                    {/* Опция "Запомнить меня" и "Забыли пароль" */}
                                </Row>
                                <Row className={styles.row}>
                                    <div className={styles.wrapperRemember}>
                                        <Col md={6} className={styles.rememberWrapper}>
                                            <label htmlFor="memberMe">Запомни меня</label>
                                            <input type="radio" name="memberMe" id="memberMe"/>
                                        </Col>
                                        <Col className={styles.rememberWrapper}><a href="#">Забыли пароль?</a></Col>
                                    </div>
                                </Row>


                                {/* Регистрация */}
                                <Row className={styles.row}>
                                    <Col className={styles.textAccaunt}>Нет аккаунта? </Col>
                                    <Col md={8}><Link className={styles.linkPink} to="/registr">Присоединяйся !</Link></Col>
                                </Row>

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
            </Form>
            )}
        </Formik>
        </>
    );
};

export default Auth;
