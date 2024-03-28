import React from 'react';
import './Authorization.scss';
import { useState } from 'react';
import eyeIcon from '../../assets/icons/eyeIconClose.svg';
import imageCard from '../../assets/img/author.png';
import eyeIconOpen from '../../assets/icons/eye-open-16-Regular.svg';
import { Header } from '../Header/Header';
import { CommonButton } from '../CommonButton/CommonButton';
import PropTypes from 'prop-types';
import { Footer } from '../Footer/Footer';
import { useAppDispatch } from '../../redux/store';
import { authentication } from '../../features/auth/authReducer';
import { Path } from '../../constants/path';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    try {
      await dispatch(
        authentication({
          userEmail: email,
          userPassword: password,
        }),
      );
    } catch (error) {
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
                  <svg
                    onClick={togglePasswordVisibility}
                    className={
                      'eye-icon' +
                      (passwordError ? ' password-error-icon' : '') +
                      (emailError ? ' email-error-icon' : '') +
                      (emailError && passwordError ? ' both-error-icon' : '')
                    }
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4.75C6.20507 4.75 4.75 6.20507 4.75 8C4.75 9.79493 6.20507 11.25 8 11.25C9.79493 11.25 11.25 9.79493 11.25 8C11.25 6.20507 9.79493 4.75 8 4.75ZM6.25 8C6.25 7.0335 7.0335 6.25 8 6.25C8.9665 6.25 9.75 7.0335 9.75 8C9.75 8.9665 8.9665 9.75 8 9.75C7.0335 9.75 6.25 8.9665 6.25 8Z"
                      fill="#222222"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 2.25C4.36891 2.25 1.27199 4.52873 0.049516 7.73263C-0.016185 7.90483 -0.0161849 8.09518 0.0495162 8.26737C1.272 11.4713 4.36891 13.75 8 13.75C11.6311 13.75 14.728 11.4713 15.9505 8.26737C16.0162 8.09518 16.0162 7.90482 15.9505 7.73263C14.728 4.52874 11.6311 2.25 8 2.25ZM8 12.25C5.11486 12.25 2.63408 10.5017 1.55935 8C2.63408 5.49833 5.11486 3.75 8 3.75C10.8851 3.75 13.3659 5.49833 14.4406 8C13.3659 10.5017 10.8851 12.25 8 12.25Z"
                      fill="#222222"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={togglePasswordVisibility}
                    className={
                      'eye-icon' +
                      (emailError && passwordError ? ' both-error-icon' : '')
                    }
                    width="16"
                    height="16"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.1813 8.14905C4.50457 7.96132 3.34355 6.33893 3.74526 4.66902L6.1813 8.14905ZM6.50001 8.83366C4.36343 8.83366 2.49809 7.69405 1.50001 6.00033C1.95324 5.23122 2.58543 4.57654 3.34051 4.09079L2.76674 3.27114C1.89586 3.83854 1.16503 4.5991 0.638468 5.49264C0.547812 5.64647 0.5 5.82178 0.5 6.00034C0.5 6.1789 0.547812 6.3542 0.638468 6.50803C1.81259 8.50045 4.00293 9.83365 6.50001 9.83365C6.77608 9.83367 7.0519 9.8172 7.32601 9.78434L6.6589 8.83134C6.60595 8.83282 6.55298 8.8336 6.50001 8.83366ZM12.3615 6.50801C11.6692 7.68289 10.6236 8.62763 9.37084 9.20576L10.3733 10.6378C10.4524 10.7509 10.4249 10.9068 10.3118 10.986L9.8798 11.2884C9.7667 11.3676 9.6108 11.3401 9.53163 11.227L2.62676 1.36281C2.54757 1.24971 2.57509 1.09381 2.6882 1.01465L3.12022 0.712209C3.23332 0.633021 3.38922 0.660542 3.46838 0.773646L4.62517 2.42625C5.22109 2.25748 5.85017 2.167 6.50001 2.167C8.99709 2.167 11.1874 3.5002 12.3615 5.49264C12.4522 5.64647 12.5 5.82177 12.5 6.00033C12.5 6.17888 12.4522 6.35418 12.3615 6.50801ZM11.5 6.00033C10.5801 4.43922 8.9234 3.34887 6.99663 3.18768C6.79255 3.39779 6.66667 3.68429 6.66667 4.00033C6.66667 4.64466 7.18901 5.16699 7.83334 5.16699C8.47767 5.16699 9.00001 4.64466 9.00001 4.00033L8.99999 3.99945C9.63815 5.19272 9.34872 6.7132 8.23065 7.57693L8.7868 8.37141C9.92972 7.8868 10.8814 7.05003 11.5 6.00033Z"
                      fill="#A9A9A9"
                    />
                  </svg>
                )}
              </div>
            </form>
            <CommonButton
              className="btn-enter"
              variant={'primary'}
              onClick={handleSubmit}
              type="submit"
            >
              Войти
            </CommonButton>
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
