import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/Auth/Auth.module.css';
import Logo from '../../img/fullLogo.jpg';
import {Link} from 'react-router-dom';
import {Field, Formik, Form, FormikHelpers} from 'formik';

interface Values {
    email: string,
    username: string,
    password: string
}

function Auth() {


    return (
        <Formik
            initialValues={{
                email: '',
                username: '',
                password: '',
            }}

            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}>
            {/*>>>>>>> be89a7b0d981bc53f4d687df91b2c1587dd93c96*/}

            {({errors, touched}) => (
                <Form>
                    <div className={styles.auth}>
                        <Container>
                            <div>
                                {/* Обертка */}
                                <Col className={styles.wrapper}>
                                    {/* Логотип */}
                                    <Row className={styles.row}><a href="/"><img src={Logo}
                                                                                 alt="Logo"/></a></Row>

                                    {/* Заголовок */}
                                    <Row className={styles.row}><h1 className={styles.headText}
                                                                    style={{textAlign: 'center'}}>Мы
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
                                        />
                                        {errors.username && touched.username && (
                                            <div>{errors.username}</div>
                                        )}



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
                                            <Col className={styles.rememberWrapper}><a href="#">Забыли
                                                пароль?</a></Col>
                                        </div>
                                    </Row>


                                    {/* Регистрация */}
                                    <Row className={styles.row}>
                                        <Col className={styles.textAccaunt}>Нет аккаунта? </Col>
                                        <Col md={8}><Link className={styles.linkPink} to="/registr">Присоединяйся
                                            !</Link></Col>
                                    </Row>

                                    {/* Вопросы */}
                                    <Row className={styles.row}>
                                        <Col className={styles.textAccaunt}>Остались вопросы? </Col>
                                        <Col md={8}><a className={styles.linkPink} href="#">Спроси
                                            нас!</a></Col>
                                    </Row>
                                    <br/>

                                    {/* Соглашение на обработку данных */}
                                    <Row className={styles.row}><p>Нажимая кнопку «Войти», вы
                                        подтверждаете своё согласие с
                                        условиями обработки данных.</p></Row>
                                </Col>
                            </div>
                        </Container>
                    </div>
                </Form>
            )}
        </Formik>
    )
};

export default Auth;
