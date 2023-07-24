import React, {useState,useRef} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/Auth/Auth.module.css'
import Logo from '../../img/fullLogo.jpg'
import {Link} from 'react-router-dom'
import {useForm} from "react-hook-form";
import eye from '../../img/openEye.png'
import closeEye from '../../img/closeEye.png'

function Registr() {
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
        if (!login && !password1 && password2 && !gmail) {
            setError('Заполните логин и пароль (Все поля должны быть заполнены)')
        }
        if (gmail) {
            alert(JSON.stringify({
                gmail
            }))
        }

        if (login && password1 && password2) {
            if (password1 === password2) {
                alert(JSON.stringify({
                    login,
                    password1
                }))
            } else {
                setErrorPassword('Введеные пароли не совпадают!')
            }
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

                            {/*//______________________________________________________________________________________________________________________________*/}
                            {/* Вход через Google */}
                            <Row className={styles.row}>
                                <input
                                    className={errors.email ? styles.input_border_red : styles.input}
                                    placeholder='Войти с Google'
                                    {...register("email", {
                                        min: 12,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                            message: "Please enter valid email",
                                        },
                                    })}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setGmail(e.target.value)
                                    }}
                                />
                            </Row>
                            <Row className={styles.row}>
                                {errors.email && (<div className={styles.errors}>{errors.email.message}</div>)}
                            </Row>


                            {/*//______________________________________________________________________________________________________________________________*/}

                            {/* Разделитель "ИЛИ" */}
                            <Row className={styles.row}>
                                <div className={styles.or_hr}>
                                    <hr className={styles.hr}/>
                                    <span className={styles.or}>или</span>
                                    <hr className={styles.hr}/>
                                </div>
                            </Row>

                            {/*//______________________________________________________________________________________________________________________________*/}

                            {/* Поле ввода логина */}
                            <Row className={styles.row}>
                                <input
                                    className={errors.name ? styles.input_border_red : styles.input}
                                    placeholder='Логин'
                                    {...register("name", {})}
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


                                <div className={`${styles.wrapperPasswordInput} input-group mb-3`} style={{width:'83%', margin: '0 auto' }} >

                                    <input
                                        className={`${errors.password1 ? styles.input_border_red : styles.input} form-control`}
                                        type="password"
                                        aria-label="username"
                                        autoComplete="current-password"
                                        id="id_password"
                                        placeholder='Пароль'
                                        {...register("password1", {
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                                message: "Пароль вводится латинскими буквами,должен состоять минимум из 8 символов,должен содержать как минимум 1 букву, 1 цифру,должен содержать символы верхнего и нижнего регистра."
                                            }
                                        })}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setPassword1(e.target.value)
                                        }}
                                    />
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="" alt=""/>
                                    </span>
                                </div>
                            </Row>


                            <Row className={styles.row}>
                                <input className={errors.password2 ? styles.input_border_red : styles.input}
                                       type="password"
                                       autoComplete="current-password"
                                       id="id_password"
                                       placeholder='Пароль'
                                       {...register("password2", {
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

export default Registr;
