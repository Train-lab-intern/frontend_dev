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
import CustomInput from '../../UI/CustomInput/CustomInput';

interface IAuthorizationProps {
  register?: boolean
}

export default function UserAuthorization({register=false}:IAuthorizationProps) {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isPassword, setIsPassword] = useState(true);
  // const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (event: SubmitFormEvent) => {
    event.preventDefault();
    setErrorPassword('');

    if (email.length === 0 || password.length === 0) {
      setIsEmail(!!email.length);
      setIsPassword(!!password.length);
      return;
    }

    const requestConfig = {email, password};
    const response =  register ? await MainApiService.userRegister(requestConfig) : await MainApiService.userLogin(requestConfig)

    if (response.statusCode !== 0) {
      const { token, refreshToken, userPageDto } = await response;
      dispatch(updateUser({ token, refreshToken, userPageDto }));
      navigate('/');
    } else {
      setErrorPassword(await response.message);
    }
  };

  const onEmailChange = (event: ChangeInputEvent) => {
    setEmail(event.target.value);
    setIsEmail(true);
  };

  const onPasswordChange = (event: ChangeInputEvent) => {
    setPassword(event.target.value);
    setIsPassword(true);
    setErrorPassword('');
  };

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible); //Create fitch later
  // };

  return (
    <div className="login">
      <h1 className="login-title">Mы рады вас видеть</h1>
      <form action="submit" className="login-form" onSubmit={handleSubmit}>
        <CustomInput
          type="email"
          id="email"
          name="email"
          placeholder="Почта"
          callback={onEmailChange}
          required={!isEmail}
        />
        <CustomInput
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          errorMesage={errorPassword}
          callback={onPasswordChange}
          required={!isPassword}
        />
        <CommonButton variant="primary" className="submit_button">
          {register ? 'Зарегистрироваться' : "Войти"}
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
        {register ? <div/> : <Link to={Path.PASSWORD_RECOVERY}>Забыли пароль?</Link>}     
      </div>
      <AddLinks register={register}/>
      <div className="login-disclaimer">
        Нажимая кнопку «Войти», вы подтверждаете своё согласие с условиями
        обработки данных.
      </div>
    </div>
  );
}
