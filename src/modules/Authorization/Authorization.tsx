/* eslint-disable */
// @ts-nocheck
import { Link } from 'react-router-dom';
import './Authorization.scss';
import { useState } from 'react';
import imageCard from '../../assets/img/author.png';
import Header from '../../components/Header/Header';
import CommonButton from '../../UI/CommonButton/CommonButton';
// import PropTypes from 'prop-types';
import { Footer } from '../../components/Footer/Footer';
import { useAppDispatch } from '../../redux/store';
import { authentication } from '../auth/authReducer';
import { Path } from '../../pages/constants/path';
import 'bootstrap/dist/css/bootstrap.min.css';
import EyeIcon from '../../assets/icons/IconsSvg/EyeIcon';
import EyeIconHidden from '../../assets/icons/IconsSvg/EyeIconHidden';
import MainApiService from '../../api/MainApiService';

export const Authorization = ({ primary }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useAppDispatch();
  const [emailInputText, setEmailInputText] = useState('');
  const [passwordInputText, setPasswordInputText] = useState('');

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const errorMessages = {
    required: 'Это поле обязательно для заполнения',
    invalid: 'Неверный логин или пароль',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError('');
    setPasswordError('');
    let isValid = true;
    if (!email) {
      setEmailError(errorMessages.required);
      isValid = false;
    }
    if (!password) {
      setPasswordError(errorMessages.required);
      isValid = false;
    }
    if (!isValid) {
      return;
    }
    const response = await MainApiService.userLogin({userEmail: email ,userPassword: password})
    if (response.statusCode === 0) {
      setEmailError(errorMessages.invalid);
      setPasswordError(errorMessages.invalid);
    }
  };
  const onEmailChange = (event) => {
    setEmailInputText(event.target.value);
    setEmail(event.target.value);
    setEmailError('');
  };
  const onPasswordChange = (event) => {
    setPasswordInputText(event.target.value);
    setPassword(event.target.value);
    setPasswordError('');
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper-m">
        <div
          className="block-auth"
          aria-label="диалоговое окно для авторизации"
        >
          <img
            src={imageCard}
            alt="картинка с сине-голубым оттенком"
            className="imageCard"
          />
          <div className="dialog-window">
            <h1 className="dialog-title">Mы рады вас видеть</h1>

            <form className="dialog-content" onSubmit={handleSubmit}>
              {emailError && (
                <p className={'error ' + 'error-text'}>{emailError}</p>
              )}
              <div
                className={`form-floating mb-3 input-field ${email ? 'has-value' : ''}`}
              >
                <input
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  id="floatingInput"
                  type="email"
                  name="email"
                  placeholder=" "
                  value={email}
                  onChange={onEmailChange}
                />
                <label htmlFor="floatingInput">Почта</label>
              </div>
              {passwordError && (
                <p className={'error ' + 'error-text'}>{passwordError}</p>
              )}
              <div
                className={`form-floating mb-3 input-field ${password ? 'has-value' : ''}`}
              >
                <input
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  type={passwordVisible ? 'text' : 'password'}
                  id="pass"
                  name="password"
                  minLength={8}
                  required
                  value={password}
                  placeholder=" "
                  onChange={onPasswordChange}
                />
                <label className="lab" htmlFor="pass">
                  Пароль
                </label>

                {passwordVisible ? (
                  <EyeIcon
                    onClick={togglePasswordVisibility}
                    passwordError={passwordError}
                    emailError={emailError}
                  />
                ) : (
                  <EyeIconHidden
                    onClick={togglePasswordVisibility}
                    emailError={emailError}
                    passwordError={passwordError}
                  />
                )}
              </div>
              <CommonButton
              className="btn-enter"
              variant={'primary'}
              onClick={handleSubmit}
              type="submit"
            >
              Войти
            </CommonButton>
            </form>            
            <div className="links-block">
              <ul>
                <li>
                  Запомнить меня{' '}
                  <input
                    id="yes"
                    type="checkbox"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                </li>
                <li className="medium"> Нет аккаунта на IT Roast?</li>
                <li>Остались вопросы?</li>
              </ul>
              <ul>
                <li>
                  <Link className="hidden-link" to={Path.CHANGE_PASSWORD}>
                    Забыли пароль?
                  </Link>
                </li>
                <li className="medium">
                  <Link to={Path.REGISTRATION}>Присоединяйся!</Link>
                </li>
                <li>
                  <a href="mailto:google.com">Спроси нас!</a>
                </li>
              </ul>
              <div></div>
            </div>
            <p>
              Нажимая кнопку «Войти», вы подтверждаете своё согласие с условиями
              обработки данных.
            </p>
          </div>
        </div>
      </div>
      <Footer mainPageData={testMainPageData} />
    </div>
  );
};

const testMainPageData = {
  companyName: 'My Company',
  address: '123 Main St, City',
  phone: '555-1234',
  email: 'info@mycompany.com',
};
