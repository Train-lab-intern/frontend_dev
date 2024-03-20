import React from "react";
import "./Authorization.css";
import { useState } from "react";
import eyeIcon from "../../assets/icons/closeEye.png";
import imageCard from "../../assets/img/author.png";
import eyeIconOpen from "../../assets/icons/eye-open-16-Regular.svg";
import { Header } from "../Header/Header";
import { CommonButton } from "../CommonButton/CommonButton";
import PropTypes from "prop-types";
import { Footer } from "../Footer/Footer";
import { useAppDispatch } from "../../redux/store";
import { authentication } from "../../features/auth/authReducer";
import { Path } from "../../constants/path";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Authorization = ({ primary }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useAppDispatch();
  const [emailInputText, setEmailInputText] = useState("");
  const [passwordInputText, setPasswordInputText] = useState("");

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    let isValid = true;
    if (!email) {
      setEmailError("Это поле обязательно для заполнения");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Это поле обязательно для заполнения");
      isValid = false;
    }
    if (!isValid) {
      return;
    }
    try {
      // @ts-ignore
      await dispatch(
        authentication({
          userEmail: email,
          userPassword: password,
        }),
      );
    } catch (error) {
      setEmailError("Неверный логин или пароль");
      setPasswordError("Неверный логин или пароль");
    }
  };
  const onEmailChange = (event) => {
    setEmailInputText(event.target.value);
    setEmail(event.target.value);
    setEmailError("");
  };
  const onPasswordChange = (event) => {
    setPasswordInputText(event.target.value);
    setPassword(event.target.value);
    setPasswordError("");
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
              <p className={"error " + (emailError ? "error-text" : "")}>
                {emailError}
              </p>

              <div
                className={`form-floating mb-3 input-field ${email ? "has-value" : ""}`}
              >
                <input
                  className={`form-control ${emailError ? "is-invalid" : ""}`}
                  id="floatingInput"
                  type="email"
                  name="email"
                  placeholder=" "
                  value={email}
                  onChange={onEmailChange}
                />
                <label htmlFor="floatingInput">Почта</label>
              </div>

              <p className={"error " + (passwordError ? "error-text" : "")}>
                {passwordError}
              </p>

              <div
                className={`form-floating mb-3 input-field ${password ? "has-value" : ""}`}
              >
                <input
                  className={`form-control ${passwordError ? "is-invalid" : ""}`}
                  type={passwordVisible ? "text" : "password"}
                  id="floatingInput"
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
                <img
                  src={passwordVisible ? eyeIconOpen : eyeIcon}
                  alt="eye icon"
                  className={
                    "eye-icon" +
                    (passwordError ? " password-error-icon" : "") +
                    (emailError ? " email-error-icon" : "") +
                    (emailError && passwordError ? " both-error-icon" : "")
                  }
                  onClick={togglePasswordVisibility}
                />
              </div>
            </form>
            <CommonButton
              className="btn-enter"
              variant={"primary"}
              onClick={handleSubmit}
            >
              Войти
            </CommonButton>
            <div className="links-block">
              <ul>
                <li>
                  Запомнить меня{" "}
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
Authorization.propTypes = {
  primary: PropTypes.bool,
};
const testMainPageData = {
  companyName: "My Company",
  address: "123 Main St, City",
  phone: "555-1234",
  email: "info@mycompany.com",
};
