import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from '../Auth/Auth.module.css'
import Logo from '../../assets/img/fullLogo.jpg'
import {Link, NavLink} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {Path} from "../../constants/path";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {clearErrors, registration} from "../../redux/reducers/authReducer";
import {RequestStatus} from "../../constants/requestStatus";

type FormDataType = {
  email: string
  username: string
  password: string
  passwordConfirm: string
}

function Registration() {

  const dispatch = useAppDispatch()
  const authStatus = useAppSelector(state => state.auth.authStatus)
  const authErrors = useAppSelector(state => state.auth.authErrors)


  const {
    register,
    formState: {errors},
    control,
    handleSubmit
  } = useForm<FormDataType>({
    mode: "onSubmit"
  })

  function handleEyePassword() {
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

  useEffect(() => {
    if (authStatus === RequestStatus.FAILED) alert(authErrors)
    if (authStatus === RequestStatus.SUCCEEDED) alert(
      'На адрес Вашей электронной почты было отправлено письмо. Для завершения регистрации перейдите по указанной в письме ссылке.'
    )
  }, [authStatus])

  useEffect(() => {
    return () => {
      dispatch(clearErrors())
    }
  },[])

  return (
    <div className={styles.auth}>
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

              {/* Поле ввода Gmail */}
              <Row className={styles.row}>
                <input
                  className={errors.email ? styles.input_border_red : styles.input}
                  placeholder='Почта'
                  {...register("email", {
                    required: 'это поле обязательно для заполнения',
                    pattern: {
                      value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                      message: 'Вы заполняете поле в неверном формате.'
                    }
                  })}
                />
              </Row>
              <Row className={styles.row}>
                {errors.email && (<div className={styles.errors}>{errors.email.message}</div>)}
              </Row>


              {/* Поле ввода логина */}
              <Row className={styles.row}>
                <input
                  className={errors.username ? styles.input_border_red : styles.input}
                  placeholder='Логин'
                  {...register("username", {
                    required: 'это поле обязательно для заполнения',
                    pattern: {
                      value: /^(?![A-Za-z]\d?$)[a-zA-Z]+\d*$/,
                      message: 'Вы заполняете поле в неверном формате.'
                    }
                  })}
                />
              </Row>
              <Row className={styles.row}>
                {errors.username && (<div className={styles.errors}>{errors.username.message}</div>)}
              </Row>
              <br/>

              {/*//______________________________________________________________________________________________________________________________*/}
              {/* Поле ввода пароля */}
              <Row className={styles.row}>
                <input
                  className={`${errors.password ? styles.input_border_red : styles.input} form-control`}
                  type="text"
                  aria-label="username"
                  autoComplete="current-password"
                  id="id_password1"
                  placeholder='Пароль'
                  {...register("password", {
                    required: 'это поле обязательно для заполнения',
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                      message: "Пароль вводится латинскими буквами,должен состоять минимум из 8 символов,должен содержать как минимум 1 букву, 1 цифру,должен содержать символы верхнего и нижнего регистра."
                    }
                  })}
                />

              </Row>

              <Row className={styles.row}>
                {errors.password && (<div className={styles.errors}>{errors.password.message}</div>)}
              </Row>


              <Row className={styles.row}>
                <input className={errors.passwordConfirm ? styles.input_border_red : styles.input}
                       type="text"
                       autoComplete="current-password"
                       id="id_password2"
                       placeholder='Пароль'
                       {...register("passwordConfirm", {
                         required: 'это поле обязательно для заполнения'
                       })}
                />
              </Row>

              <Row className={styles.row}>
                {errors.passwordConfirm && (<div className={styles.errors}>{errors.passwordConfirm.message}</div>)}
              </Row>
              {/*//______________________________________________________________________________________________________________________________*/}

              <br/>

              {/* Кнопка "Войти" */}
              <Row className={styles.row}>
                <button type={'submit'} className={styles.input}>Зарегистрироваться</button>
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
