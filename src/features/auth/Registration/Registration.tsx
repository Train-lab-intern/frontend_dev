import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from './Registration.module.css'
import Logo from '../../../assets/img/fullLogo.jpg'
import {Link, NavLink} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {Path} from "../../../constants/path";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {changeAuthStatus, clearErrors, registration} from "../authReducer";
import {RequestStatus} from "../../../constants/requestStatus";
import closeEyeIcon from '../../../assets/icons/closeEye.png'
import openEyeIcon from '../../../assets/icons/openEye.png'
import {Notification} from "../../../components/Notifications/Notification";

type FormDataType = {
  email: string
  username: string
  password: string
  passwordConfirm: string
}

export const Registration = () => {

  const dispatch = useAppDispatch()
  const authStatus = useAppSelector(state => state.auth.authStatus)
  const authErrors = useAppSelector(state => state.auth.authErrors)
  const [showPassword, setShowPassword] = useState(false)


  const {
    register,
    formState: {errors},
    control,
    handleSubmit,
    reset
  } = useForm<FormDataType>({
    mode: "onSubmit"
  })

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  function onSubmit(data: FormDataType) {

    if (data.password === data.passwordConfirm) {
      dispatch(registration({
        email: data.email,
        username: data.username,
        password: data.password
      }))
    } else {
      control.setError('passwordConfirm', {message: 'Введенный пароль не совпадает'})
    }
  }

  const handleCloseNotification = () => {
    dispatch(changeAuthStatus(RequestStatus.IDLE))
    dispatch(clearErrors())
  }

  useEffect(() => {
    if (authStatus === RequestStatus.SUCCEEDED) {
      reset()
    }
  }, [authStatus])

  useEffect(() => {
    return () => {
      dispatch(changeAuthStatus(RequestStatus.IDLE))
      dispatch(clearErrors())
    }
  }, [])

  return (
    <div className={styles.auth}>
      {/*<button onClick={() => dispatch(changeAuthStatus(RequestStatus.SUCCEEDED))}>reg</button>*/}
      {authStatus === RequestStatus.SUCCEEDED && <Notification
        messages={
          'На адрес Вашей электронной почты было отправлено письмо. Для завершения регистрации перейдите по указанной в письме ссылке.'
        }
        handleClose={handleCloseNotification}
      />}
      {authStatus === RequestStatus.FAILED && authErrors &&
        <Notification messages={authErrors} handleClose={handleCloseNotification} />}
      <Container>
        <div>
          {/* Обертка */}
          <Col className={styles.wrapper}>
            {/* Логотип */}
            <Row className={styles.row}><NavLink to={Path.HOME}><img src={Logo} alt="Logo"/></NavLink></Row>

            {/* Заголовок */}
            <Row className={styles.row}><h1 className={styles.headText} style={{textAlign: 'center'}}>Мы
              рады видеть вас</h1></Row>


            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Поле ввода email */}
              <Row className={styles.row}>
                <label>
                  <input
                    className={`${errors.email ? styles.input_border_red : styles.input} form-control`}
                    placeholder='Почта'
                    {...register("email", {
                      required: 'это поле обязательно для заполнения',
                      pattern: {
                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                        message: 'Вы заполняете поле в неверном формате.'
                      }
                    })}
                  />
                </label>
              </Row>
              <Row className={styles.row}>
                {errors.email && (<div className={styles.errors}>{errors.email.message}</div>)}
              </Row>


              {/* Поле ввода логина */}
              <Row className={styles.row}>
                <label>
                  <input
                    className={`${errors.username ? styles.input_border_red : styles.input} form-control`}
                    placeholder='Логин'
                    {...register("username", {
                      required: 'это поле обязательно для заполнения',
                      minLength: {value: 4, message: 'Минимальная длина имени 4 символа.'}
                    })}
                  />
                </label>
              </Row>
              <Row className={styles.row}>
                {errors.username && (<div className={styles.errors}>{errors.username.message}</div>)}
              </Row>
              <br/>

              {/*//______________________________________________________________________________________________________________________________*/}
              {/* Поле ввода пароля */}
              <Row className={styles.row}>
                <label className={styles.labelPassword}>
                  <input
                    className={`${errors.password ? styles.input_border_red : styles.input} form-control`}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Пароль'
                    {...register("password", {
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
                {errors.password && (<div className={styles.errors}>{errors.password.message}</div>)}
              </Row>


              <Row className={styles.row}>
                <label className={styles.labelPassword}>
                  <input className={`${errors.passwordConfirm ? styles.input_border_red : styles.input} form-control`}
                         type={showPassword ? 'text' : 'password'}
                         placeholder='Пароль'
                         {...register("passwordConfirm", {
                           required: 'это поле обязательно для заполнения'
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
                {errors.passwordConfirm && (<div className={styles.errors}>{errors.passwordConfirm.message}</div>)}
              </Row>
              {/*//______________________________________________________________________________________________________________________________*/}

              <br/>

              {/* Кнопка "Войти" */}
              <Row className={styles.row}>
                <button
                  type={'submit'}
                  className={styles.input}
                  disabled={authStatus === RequestStatus.LOADING}
                >Зарегистрироваться</button>
              </Row>

            </form>
            <br/>

            {/* Есть аккаунт */}
            <Row className={styles.row}>
              <Col className={styles.textAccaunt}>Есть аккаунт? </Col>
              <Col md={8}><Link className={styles.linkPink} to={Path.AUTH}>Войти!</Link></Col>
            </Row>

            {/* Вопросы */}
            <Row className={styles.row}>
              <Col className={styles.textAccaunt}>Остались вопросы? </Col>
              <Col md={8}><a className={styles.linkPink} href="src/features/auth/Registration/Registration#">Спроси нас!</a></Col>
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
}