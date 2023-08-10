import React, {useState,useRef} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../Auth/Auth.module.css'
import Logo from '../../assets/img/fullLogo.jpg'
import {Link} from 'react-router-dom'
import {useForm} from "react-hook-form";
import eye from '../../assets/icons/openEye.png'
import closeEye from '../../assets/icons/closeEye.png'

function Registration() {
    const [gmail, setGmail] = useState('')
    const [login, setLogin] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const refPassword1 = useRef<HTMLInputElement | null>(null)

    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm<Inputs>({
        mode: "onSubmit"
    })

    type Inputs = {
        email: string
        name: string
        password1: string
        password2: string
    }

    function handleEyePassword () {

    }


    function onSubmit(data: any) {
        if (gmail && login && password1 && password2) {
            if (password1 === password2) {
                fetch("https://test.app.it-roast.com/api/v1/users/register", {
                    method: 'POST',
                    body: JSON.stringify({
                        "username": login,
                        "email": gmail,
                        "password": password1
                    }),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        // Обработка ответа сервера
                        console.log(data)
                    })
            }
        }else {
            setErrorPassword('Введеные пароли не совпадают!')
        }

    }

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


                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Поле ввода Gmail */}
                            <Row className={styles.row}>
                                <input
                                    className={errors.name ? styles.input_border_red : styles.input}
                                    placeholder='post@gmail.com'
                                    {...register("email", {
                                        required:'это поле обязательно для заполнения',
                                        pattern:{
                                            value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                            message: 'Вы заполняете поле в неверном формате.'
                                        }
                                    })}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setGmail(e.target.value)
                                    }}
                                />
                            </Row>



                            {/* Поле ввода логина */}
                            <Row className={styles.row}>
                                <input
                                    className={errors.name ? styles.input_border_red : styles.input}
                                    placeholder='Логин'
                                    {...register("name", {
                                        required:'это поле обязательно для заполнения',
                                        pattern:{
                                            value: /^(?![A-Za-z]\d?$)[a-zA-Z]+\d*$/,
                                            message: 'Вы заполняете поле в неверном формате.'
                                        }
                                    })}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setLogin(e.target.value)
                                    }}
                                />
                            </Row>
                            <Row className={styles.row}>
                                {errors.name && (<div className={styles.errors}>{errors.name.message}</div>)}
                            </Row>
                            <br/>

                            {/*//______________________________________________________________________________________________________________________________*/}
                            {/* Поле ввода пароля */}
                            <Row className={styles.row}>
                                    <input
                                        className={`${errors.password1 ? styles.input_border_red : styles.input} form-control`}
                                        type="password"
                                        aria-label="username"
                                        autoComplete="current-password"
                                        id="id_password1"
                                        placeholder='Пароль'
                                        {...register("password1", {
                                            required:'это поле обязательно для заполнения',
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                                message: "Пароль вводится латинскими буквами,должен состоять минимум из 8 символов,должен содержать как минимум 1 букву, 1 цифру,должен содержать символы верхнего и нижнего регистра."
                                            }
                                        })}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setPassword1(e.target.value)
                                        }}
                                    />

                            </Row>


                            <Row className={styles.row}>
                                <input className={errors.password2 ? styles.input_border_red : styles.input}
                                       type="password"
                                       autoComplete="current-password"
                                       id="id_password2"
                                       placeholder='Пароль'
                                       {...register("password2", {
                                           required:'это поле обязательно для заполнения',
                                           pattern: {
                                               value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                               message: "Пароль вводится латинскими буквами,должен состоять минимум из восьми символов,должен содержать как минимум одну букву, одну цифру,должен содержать символы верхнего и нижнего регистра."
                                           }
                                       })}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                           setPassword2(e.target.value)
                                       }}
                                />
                            </Row>

                            <Row className={styles.row}>
                                {errors.password2 && (<div className={styles.errors}>{errors.password2.message}</div>)}
                            </Row>
                            <Row className={styles.row}>
                                {errorPassword && (<div className={styles.errors}>{errorPassword}</div>)}
                            </Row>
                            {/*//______________________________________________________________________________________________________________________________*/}

                            <br/>

                            {/* Кнопка "Войти" */}
                            <Row className={styles.row}>
                                <button className={styles.input}>Зарегистрироваться</button>
                            </Row>

                            <Row className={styles.row}>
                                {error && (<div className={styles.errors}>{error}</div>)}
                            </Row>


                        </form>
                        <br/>


                        {/* Есть аккаунт */}
                        <Row className={styles.row}>
                            <Col className={styles.textAccaunt}>Есть аккаунт? </Col>
                            <Col md={8}><Link className={styles.linkPink} to="/auth">Войти!</Link></Col>
                        </Row>

                        {/* Вопросы */}
                        <Row className={styles.row}>
                            <Col className={styles.textAccaunt}>Остались вопросы? </Col>
                            <Col md={8}><a className={styles.linkPink} href="#">Спроси нас!</a></Col>
                        </Row>
                        <br/>

                        {/* Соглашение на обработку данных */}
                        <Row className={styles.row}><p>Нажимая кнопку «Зарегистрироваться», вы подтверждаете своё
                            согласие с
                            условиями обработки данных.</p></Row>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Registration;
