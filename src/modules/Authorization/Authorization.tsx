import './Authorization.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { updateUser } from '../../redux/reducers/userSlice';
import { ChangeInputEvent, SubmitFormEvent } from '../../@types/types';
import { Path } from '../../pages/constants/path';
import MainApiService from '../../api/MainApiService';
import AddLinks from '../../components/AddLinks/AddLinks';
import CommonButton from '../../UI/CommonButton/CommonButton';
import { validMail, validPassword } from '../../helpers';

export default function UserAuthorization() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  // const errorMessages = {
  //   required: 'Это поле обязательно для заполнения',
  //   invalid: 'Неверный логин или пароль',
  // };

  const handleSubmit = async (event: SubmitFormEvent) => {
    event.preventDefault();
    if (!validMail(email)) {
      console.log('invalid mail');
    }
    if (!validPassword(password)) {
      console.log('invalid password');
    }
    const response = await MainApiService.userLogin({
      email,
      password,
    });
    if (response.statusCode !== 0) {
      const { token, refreshToken, userPageDto } = await response.json();
      dispatch(updateUser({ token, refreshToken, userPageDto }));
      navigate('/');
    } else {
      console.log(response.message);
    }
  };

  const onEmailChange = (event: ChangeInputEvent) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: ChangeInputEvent) => {
    setPassword(event.target.value);
  };

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // };

  return (
    <div className="login">
      <h1 className="login-title">Mы рады вас видеть</h1>
      <form action="submit" className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="login-form--input">
          Почта
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={onEmailChange}
          />
        </label>
        <label htmlFor="password" className="login-form--input">
          Пароль
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
          />
        </label>
        <CommonButton variant="primary" className="submit_button">
          Войти
        </CommonButton>
      </form>
      <div className="login-additional_control">
        <label htmlFor="remeberMe">
          Запомнить меня
          <input
            type="checkbox"
            name="remeberMe"
            id="remeberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
        </label>
        <Link to={Path.PASSWORD_RECOVERY}>Забыли пароль?</Link>
      </div>
      <AddLinks />
      <div className="login-disclaimer">
        Нажимая кнопку «Войти», вы подтверждаете своё согласие с условиями
        обработки данных.
      </div>
    </div>
  );
}
