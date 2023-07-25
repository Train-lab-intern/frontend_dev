import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../../styles/Auth/Auth.module.css'
import Logo from '../../img/fullLogo.jpg'
import {Link} from 'react-router-dom'
import {useForm} from "react-hook-form";


function Auth() {
    const [gmail,setGmail] = useState('')
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

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
        password: string
    }


    function onSubmit(data:any){
        if (!login && !password && !gmail || !login && !password) {
            setError('Заполните логин и пароль (Все поля должны быть заполнены)')
        }

        if (gmail){
            setLogin('')
            setPassword('')
            alert(JSON.stringify({
                gmail
            }))
        }
        if (login && password){
            setGmail('')
            alert(JSON.stringify({
                login,
                password
            }))
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
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setGmail(e.target.value)}}
                                />
                            </Row>
                            <Row className={styles.row}>
                                {errors.email && (<div className={styles.errors}>{errors.email.message}</div>)}
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
                                <input
                                    className={errors.name ? styles.input_border_red : styles.input}
                                       placeholder='Логин'
                                       {...register("name", {
                                           required:'это поле обязательно для заполнения',
                                           pattern:{
                                               value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                               message: 'Вы заполняете поле в неверном формате.'
                                           }
                                       })}
                                       onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setLogin(e.target.value)}}
                                />
                            </Row>
                            <Row className={styles.row}>
                                {errors.name && (<div className={styles.errors}>{errors.name.message}</div>)}
                            </Row>



                            {/* Поле ввода пароля */}
                            <Row className={styles.row}>
                                <input className={errors.password ? styles.input_border_red : styles.input}
                                       type="password"
                                       autoComplete="current-password"
                                       id="id_password"
                                       placeholder='Пароль'
                                       {...register("password", {
                                           required:'это поле обязательно для заполнения',
                                           pattern: {
                                               value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                               message: "Пароль вводится латинскими буквами,должен состоять минимум из восьми символов,должен содержать как минимум одну букву, одну цифру,должен содержать символы верхнего и нижнего регистра."
                                           }
                                       })}
                                       onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
                                />
                            </Row>
                            <Row className={styles.row}>
                                {errors.password && (<div className={styles.errors}>{errors.password.message}</div>)}
                            </Row>

                            <br/>

                            {/* Кнопка "Войти" */}
                            <Row className={styles.row}>
                                <button className={styles.input}>Войти</button>
                            </Row>

                            <Row className={styles.row}>
                                {error && (<div className={styles.errors}>{error}</div>)}
                            </Row>

                            {/* Опция "Запомнить меня" и "Забыли пароль" */}
                            <Row className={styles.row}>
                                <div className={styles.wrapperRemember}>
                                    <Col md={6} className={styles.rememberWrapper}>
                                        <label htmlFor="memberMe">Запомни меня</label>
                                        <input type="radio" name="memberMe" id="memberMe"/>
                                    </Col>
                                    <Col className={styles.rememberWrapper}><Link to="/changepassword">Забыли пароль?</Link></Col>
                                </div>
                            </Row>
                        </form>
                        <br/>




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
    );
};

export default Auth;
