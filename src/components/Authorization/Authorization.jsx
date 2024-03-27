import React from "react";
import './Authorization.css'
import {useState} from "react";
import eyeIcon from '../../assets/icons/closeEye.png'
import imageCard from '../../assets/img/author.png';
import eyeIconOpen from '../../assets/icons/eye-open-16-Regular.svg'
import {Header} from "../Header/Header";
import {CommonButton} from "../CommonButton/CommonButton";
import PropTypes from "prop-types";
import {Footer} from "../Footer/Footer";
import {useAppDispatch} from "../../redux/store";
import {authentication} from "../../features/auth/authReducer";
import {Path} from "../../constants/path";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export const Authorization = ({primary}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState ("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dispatch = useAppDispatch()

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Это поле обязательно для заполнения");
    } else if (!validateEmail(email)) {
      setEmailError("Вы заполняете поле в неверном формате");
    }
    if (!password) {
      setPasswordError("Это поле обязательно для заполнения");
    } else if (!validatePassword(password)) {
      setPasswordError("Пароль должен содержать минимум 8 символов");
    }
    if (emailError || passwordError) {
      setShowSuccessMessage(false);
      return;
    }
    // @ts-ignore
    dispatch(authentication({
      userEmail: email,
      userPassword: password
    }))
  }
    const onEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };
  const validateEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    if (typeof password === 'string') {
      return password.trim() !== '' && password.length >= 8;
    } else {
      return false;
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className='wrapper'>
      <Header />
      <div className='wrapper-m'>
        <div className='block-auth' aria-label='диалоговое окно для авторизации'>
          <img src={imageCard} alt="картинка с сине-голубым оттенком" className='imageCard' />
          <div className='dialog-window'>
            <h1 className='dialog-title'>Mы рады вас видеть</h1>
            <form className="dialog-content" onSubmit={handleSubmit}>
              <p className={"error " + (emailError ? "error-text" : "")}>{emailError}</p>
              <input className='input-field' type="email"
                          id="email"
                          name="email"
                          placeholder="Логин"
                          value={email}
                          onChange={onEmailChange}
                          style={{borderColor: emailError ? "red" : "##282828", borderWidth: '1px'}}/>
              <p className={"error " + (passwordError ? "error-text" : "")}>{passwordError}</p>
              <input className='input-field' type={passwordVisible ? 'text' : 'password'}
                          id="pass"
                          name="password"
                          minLength={8}
                          required
                          value={password}
                          placeholder="Пароль"
                          onChange={onPasswordChange}
                          style={{borderColor: passwordError ? "red" : "#282828", borderWidth: '1px'}}/>
            </form>
            
            <img src={passwordVisible ? eyeIconOpen : eyeIcon} alt="eye icon"
                 className={'eye-icon' +
                   (passwordError ? ' password-error-icon' : '') +
                   (emailError ? ' email-error-icon' : '') +
                   (emailError && passwordError ? ' both-error-icon' : '')}
                 onClick={togglePasswordVisibility} />
              <CommonButton  className='btn' variant="primary" onClick={handleSubmit}>Войти</CommonButton>
            <div className="links-block" >
              <ul>
                <li>Запомнить меня <input id="yes" type="checkbox" name="rememberMe"  checked={rememberMe} onChange={handleRememberMeChange}   /></li>
                <li className='medium'> Нет аккаунта на IT Roast?</li>
                <li>Остались вопросы?</li>
              </ul>
              <ul>
                <li><Link className="hidden" to={Path.CHANGE_PASSWORD}>Забыли пароль?</Link></li>
                <li className='medium'><Link to={Path.REGISTRATION} >Присоединяйся!</Link></li>
                <li><a href="mailto:google.com">Спроси нас!</a></li>
              </ul>
              <div>
              </div>
            </div>
            <p>Нажимая кнопку «Войти», вы подтверждаете своё согласие с условиями обработки данных.</p>
          </div>
        </div>
      </div>
      <Footer mainPageData={testMainPageData}/>
    </div>
  );
};

Authorization.propTypes = {
  primary: PropTypes.bool,
};

const testMainPageData = {
  companyName: "My Company",
  address: "123 Main St, City",
  phone: "555-1234",
  email: "info@mycompany.com"
};