import './PasswordRecovery.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChangeInputEvent, SubmitFormEvent } from '../../@types/types';
import CommonButton from '../../UI/CommonButton/CommonButton';
import {
  // validMail,
  validOnlyNumber,
  validPassword,
  // validRecoveryCode,
} from '../../helpers';
import MainApiService from '../../api/MainApiService';
import { useAppDispatch } from '../../redux/store';
import { updateUser } from '../../redux/reducers/userSlice';
import CustomInput from '../../UI/CustomInput/CustomInput';

export default function PasswordRecovery() {
  const [recoveryMail, setRecoveryMail] = useState('');
  const [isMail, setIsEmail] = useState(true);
  const [errorMail, setErrorMail] = useState('');

  const [recoveryCode, setRecoveryCode] = useState('');
  const [isRecoveryCode, setIsRecoveryCode] = useState(true);
  const [errorRecoveryCode, setErrorRecoveryCode] = useState('');

  const [recoveryNewPassword, setRecoveryNewPassword] = useState('');
  const [recoveryNewPassword2, setRecoveryNewPassword2] = useState('');
  const [isRecoveryNewPassword, setIsRecoveryPassword] = useState(true);
  const [isRecoveryNewPassword2, setIsRecoveryPassword2] = useState(true);
  const [errorRecoveryPassword, setErrorRecoveryPassword] = useState('');
  const [errorRecoveryPassword2, setErrorRecoveryPassword2] = useState('');

  const [mailFormVisible, setMailFormVisible] = useState(true);
  const [recoveryCodeFormVisible, setRecoveryCodeFormVisible] = useState(false);
  const [newPasswordFormVisible, setNewPasswordFromVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onMailChage = (event: ChangeInputEvent) => {
    setRecoveryMail(event.target.value);
    setIsEmail(true);
    setErrorMail('');
  };

  const onRecoveryCodeChage = (event: ChangeInputEvent) => {
    const newValue = event.target.value;
    setIsRecoveryCode(true);
    setErrorRecoveryCode('');
    if (validOnlyNumber(newValue)) setRecoveryCode(event.target.value);
  };

  const onNewPasswordChage = (event: ChangeInputEvent) => {
    setRecoveryNewPassword(event.target.value);
    setIsRecoveryPassword(true);
    setErrorRecoveryPassword('');
  };

  const onNewPasswordChage2 = (event: ChangeInputEvent) => {
    setRecoveryNewPassword2(event.target.value);
    setIsRecoveryPassword2(true);
    setErrorRecoveryPassword2('');
  };

  const submitMail = async (event: SubmitFormEvent) => {
    event.preventDefault();

    if (!recoveryMail.length) {
      setIsEmail(false);
      return;
    }

    const response = await MainApiService.passwordRecoveryMail({
      email: recoveryMail,
    });

    if (response.statusCode !== 0) {
      setMailFormVisible(false);
      setRecoveryCodeFormVisible(true);
    } else {
      setErrorMail(await response.message);
    }
  };

  const submitRecoveryCode = async (event: SubmitFormEvent) => {
    event.preventDefault();

    if (!recoveryCode.length) {
      setIsRecoveryCode(false);
      return;
    }

    const response = await MainApiService.passwordRecoveryVerifyCode({
      code: recoveryCode,
      email: recoveryMail,
    });

    if (response.statusCode !== 0) {
      setRecoveryCodeFormVisible(false);
      setNewPasswordFromVisible(true);
    } else {
      setErrorRecoveryCode(await response.message);
    }
  };

  const SubmitNewPassword = async (event: SubmitFormEvent) => {
    event.preventDefault();

    if (!recoveryNewPassword.length || !recoveryNewPassword2.length) {
      setIsRecoveryPassword(!!recoveryNewPassword.length);
      setIsRecoveryPassword2(!!recoveryNewPassword2.length);
      return;
    }

    if (!validPassword(recoveryNewPassword)) {
      setErrorRecoveryPassword('Incorrect new password');
      return;
    }

    if (recoveryNewPassword !== recoveryNewPassword2) {
      setErrorRecoveryPassword2('Password is not same');
      return;
    }

    const response = await MainApiService.passwordRecoveryNewPassword({
      email: recoveryMail,
      password: recoveryNewPassword,
    });

    if (response.statusCode !== 0) {
      const { token, refreshToken, userPageDto } = await response;
      dispatch(updateUser({ token, refreshToken, userPageDto }));
      navigate('/');
    } else {
      setErrorRecoveryPassword(await response.message);
    }
  };

  return (
    <main className="PasswordRecovery">
      {mailFormVisible ? (
        <div className="recovery_container">
          <form onSubmit={submitMail}>
            <div>
              Укажите адрес Вашей электронной почты, указанной при регистрации.
            </div>
            <div>Мы вышлем одноразовый код.</div>
            <CustomInput
              id="mail"
              name="mail"
              callback={onMailChage}
              placeholder="examplemail@mail.com"
              type="email"
              required={!isMail}
              errorMesage={errorMail}
            />
            <CommonButton variant="primary">Получить код</CommonButton>
          </form>
        </div>
      ) : null}

      {recoveryCodeFormVisible ? (
        <div className="recovery_container">
          <form onSubmit={submitRecoveryCode}>
            <div>
              На адресс Вашей электронной почты был отправлен одноразовый код.
            </div>
            <div className="recoveryCode_title">Введите полученный код</div>
            <CustomInput
              id="recoveryCode"
              name="recoveryCode"
              callback={onRecoveryCodeChage}
              required={!isRecoveryCode}
              errorMesage={errorRecoveryCode}
            />
            <CommonButton variant="primary">Подтвердить код</CommonButton>
            <button type="button" className="recoveryCodeRepeat">
              Получить код повторно
            </button>
          </form>
        </div>
      ) : null}

      {newPasswordFormVisible ? (
        <div className="recovery_container">
          <form onSubmit={SubmitNewPassword}>
            <div>Введите новый пароль</div>
            <CustomInput
              id="newPassword"
              name="newPassword"
              callback={onNewPasswordChage}
              required={!isRecoveryNewPassword}
              errorMesage={errorRecoveryPassword}
              type="password"
            />
            <div>Повторите новый пароль</div>
            <CustomInput
              id="newPassword2"
              name="newPassword2"
              callback={onNewPasswordChage2}
              required={!isRecoveryNewPassword2}
              errorMesage={errorRecoveryPassword2}
              type="password"
            />
            <CommonButton variant="primary">
              Сохранить новый пароль
            </CommonButton>
          </form>
        </div>
      ) : null}
    </main>
  );
}
