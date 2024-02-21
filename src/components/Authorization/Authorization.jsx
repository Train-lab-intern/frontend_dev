import React from "react";
import './Authorization.css'
import {useState} from "react";
import eyeIcon from '../../assets/icons/closeEye.png'
import imageCard from '../../assets/img/author.png';
import eyeIconOpen from '../../assets/icons/eye-open-16-Regular.svg'
import {Header} from "../Header/Header";
import {CommonButton} from "../CommonButton/CommonButton";
import PropTypes from "prop-types";
import {InputField} from "../InputField";
import {Footer} from "../Footer/Footer";
import axios from "axios";

export const Authorization = ({primary}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!validateEmail(email)) {
      setEmailError("Вы заполняете поле в неверном формате");
    } else {
      setEmailError("");
    }


    if (!validatePassword(password)) {
      setPasswordError("Пароль должен содержать минимум 8 символов");
    } else {
      setPasswordError("");
    }

    if (emailError || passwordError) {
      return;
    }

    try {
      const response = await axios.post('https://your-api-endpoint.com/login', { email, password });
      const token = response.data.token;
      alert('Вход выполнен успешно!');
    } catch (error) {
      alert('Ошибка при входе. Пожалуйста, проверьте введенные данные.');
    }
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };


  const validateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    const validatePassword = (password) => {
      return password.length >= 8;
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
            <form className="dialog-content">
              <p className={"error " + (emailError ? "error-text" : "")}>{emailError}</p>
              <InputField type="email"
                          id="email"
                          name="email"
                          placeholder="Логин"
                          onChange={onEmailChange}
                          style={{borderColor: emailError ? "red" : "black"}}/>

              <p className={"error " + (passwordError ? "error-text" : "")}>{passwordError}</p>
              <InputField type={passwordVisible ? 'text' : 'password'}
                          id="pass"
                          name="password"
                          minLength={8}
                          required
                          placeholder="Пароль"
                          onChange={onPasswordChange}
                          style={{borderColor: passwordError ? "red" : "black"}}/>

            </form>
            <img src={passwordVisible ? eyeIconOpen : eyeIcon} alt="eye icon"
                 className={'eye-icon' + (emailError || passwordError ? ' error-icon' : '')}
                 onClick={togglePasswordVisibility} />
              <CommonButton  className='btn' variant="primary" onClick={handleSubmit}>Войти</CommonButton>
            <div className="links-block" >
              <ul>
                <li>Запомнить меня <input id="yes" type="checkbox" name="rememberMe"  checked={rememberMe} onChange={handleRememberMeChange}   /></li>
                <li className='medium'><a aria-current='page' href='/' >Нет аккаунта на IT Roast?</a></li>
                <li><a aria-current='page' href='/'>Остались вопросы?</a></li>
              </ul>
              <ul>
                <li><a className="hidden" href="/">Забыли пароль?</a></li>
                <li className='medium'><a href="/" >Присоединяйся!</a></li>
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