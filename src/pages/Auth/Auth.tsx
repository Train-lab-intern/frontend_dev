import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from './Auth.module.css'
import Logo from '../../assets/img/fullLogo.jpg'
import {Link, Navigate, NavLink, useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {Path} from "../../constants/path";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {authentication, changeAuthStatus, clearErrors} from "../../redux/reducers/authReducer";
import {RequestStatus} from "../../constants/requestStatus";
import openEyeIcon from "../../assets/icons/openEye.png";
import closeEyeIcon from "../../assets/icons/closeEye.png";

type FormDataType = {
  userEmail: string
  userPassword: string
}

export const Auth = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isLogged = useAppSelector(state => state.auth.isLogged)
  const authStatus = useAppSelector(state => state.auth.authStatus)
  const authError = useAppSelector(state => state.auth.authErrors)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    formState: {errors},
    handleSubmit,
    control,
    reset
  } = useForm<FormDataType>({
    mode: "onSubmit"
  })

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  function onSubmit(data: FormDataType) {
    dispatch(authentication(data))
  }

  useEffect(() => {
    if(authStatus === RequestStatus.FAILED){
      alert(authError)
      //Вместо alert notification
      dispatch(clearErrors())
      control.setError('userEmail', {message: ''})
      control.setError('userPassword', {message: ''})
    }
    if(authStatus === RequestStatus.SUCCEEDED){
      dispatch(changeAuthStatus(RequestStatus.IDLE))
      navigate(Path.PROFILE)
    }
  }, [authStatus])

  if (isLogged) {
    return <Navigate to={Path.PROFILE}/>
  }

  return (
    <>
      {
        <div className={styles.auth}>
          <Container>
            <div>
              {/* Обертка */}
              <Col className={styles.wrapper}>
                {/* Логотип */}
                <Row className={styles.row}><NavLink to={Path.HOME}><img src={Logo} alt="Logo"/></NavLink></Row>

                {/* Заголовок */}
                <Row className={styles.row}><h1 className='md:text-3xl font-bold' style={{textAlign: 'center'}}>Мы
                  рады видеть вас</h1></Row>


                <form onSubmit={handleSubmit(onSubmit)}>

                  {/* Вход через Google */}
                  <Row className={styles.row}>
                    <input
                      className={errors.userEmail ? styles.input_border_red : styles.input}
                      placeholder='Почта'
                      {...register("userEmail", {
                        required: 'это поле обязательно для заполнения',
                        pattern: {
                          value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                          message: 'Вы заполняете поле в неверном формате.'
                        }
                      })}
                    />
                  </Row>
                  <Row className={styles.row}>
                    {errors.userEmail && (<div className={styles.errors}>{errors.userEmail.message}</div>)}
                  </Row>

                  {/* Поле ввода пароля */}
                  <Row className={styles.row}>
                    <label className={styles.labelPassword}>
                    <input
                      className={`${errors.userPassword ? styles.input_border_red : styles.input} form-control`}
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Пароль'
                      {...register("userPassword", {
                        required: 'это поле обязательно для заполнения',
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                          message: "Пароль вводится латинскими буквами,должен состоять минимум из 8 символов,должен содержать как минимум 1 букву, 1 цифру,должен содержать символы верхнего и нижнего регистра."
                        }
                      })}
                    />
                      <img
                        src={showPassword ? openEyeIcon : closeEyeIcon}
                        className={styles.showPasswordIcon}
                        alt="icon"
                        onClick={handleShowPassword}
                      />
                    </label>
                  </Row>
                  <Row className={styles.row}>
                    {errors.userPassword && (<div className={styles.errors}>{errors.userPassword.message}</div>)}
                  </Row>

                  <br/>

                  {/* Кнопка "Войти" */}
                  <Row className={styles.row}>
                    <button className={styles.input}>Войти</button>
                  </Row>

                  {/* Опция "Запомнить меня" и "Забыли пароль" */}
                  <Row className={styles.row}>
                    <div className={styles.wrapperRemember}>
                      <Col md={6} className={styles.rememberWrapper}>
                        <label htmlFor="memberMe">Запомни меня</label>
                        <input type="radio" name="memberMe" id="memberMe"/>
                      </Col>
                      <Col className={styles.rememberWrapper}><Link to={Path.CHANGE_PASSWORD}>Забыли
                        пароль?</Link></Col>
                    </div>
                  </Row>
                </form>
                <br/>


                {/* Регистрация */}
                <Row className={styles.row}>
                  <Col className={styles.textAccaunt}>Нет аккаунта? </Col>
                  <Col md={8}><Link className={styles.linkPink} to={Path.REGISTRATION}>Присоединяйся !</Link></Col>
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
      }
    </>
  );
}