import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordRecovery.scss';
import { ChangeInputEvent, SubmitFormEvent } from '../../@types/types';
import CommonButton from '../../UI/CommonButton/CommonButton';
import {
  validMail,
  validOnlyNumber,
  validPassword,
  validRecoveryCode,
} from '../../helpers';
import MainApiService from '../../api/MainApiService';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { updateUser } from '../../redux/reducers/userSlice';

export default function PasswordRecovery() {
  const [recoveryMail, setRecoveryMail] = useState('');
  const [recoveryCode, setRecoveryCode] = useState('');
  const [recoveryNewPassword, setRecoveryNewPassword] = useState('');
  const [recoveryNewPassword2, setRecoveryNewPassword2] = useState('');

  const [mailFormVisible, setMailFormVisible] = useState(true);
  const [recoveryCodeFormVisible, setRecoveryCodeFormVisible] = useState(false);
  const [newPasswordFormVisible, setNewPasswordFromVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const onMailChage = (event: ChangeInputEvent) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    setRecoveryMail(target.value);
  };

  const onRecoveryCodeChage = (event: ChangeInputEvent) => {
    const newValue = event.target.value;
    if (validOnlyNumber(newValue)) setRecoveryCode(event.target.value);
  };

  const onNewPasswordChage = (event: ChangeInputEvent) => {
    setRecoveryNewPassword(event.target.value);
  };

  const onNewPassword2Chage = (event: ChangeInputEvent) => {
    setRecoveryNewPassword2(event.target.value);
  };

  const submitMail = async (event: SubmitFormEvent) => {
    event.preventDefault();
    if (validMail(recoveryMail)) {
      const json = await MainApiService.passwordRecoveryMail({
        email: recoveryMail,
      });
      if (json.statusCode !== 0) {
        setMailFormVisible(false);
        setRecoveryCodeFormVisible(true);
      } else {
        console.log('Mail is not find');
      }
    } else console.log('Invalid mail');
  };

  const submitRecoveryCode = async (event: SubmitFormEvent) => {
    event.preventDefault();
    if (validRecoveryCode(recoveryCode)) {
      const json = await MainApiService.passwordRecoveryVerifyCode({
        code: recoveryCode,
        email: recoveryMail,
      });
      if (json.statusCode !== 0) {
        setRecoveryCodeFormVisible(false);
        setNewPasswordFromVisible(true);
      } else {
        console.log('Code is not correct');
      }
    } else console.log('Invalid recovery code');
  };

  const SubmitNewPassword = async (event: SubmitFormEvent) => {
    event.preventDefault();
    if (recoveryNewPassword !== recoveryNewPassword2)
      console.log('Password is not same');
    else if (validPassword(recoveryNewPassword)) {
      const json = await MainApiService.passwordRecoveryNewPassword({
        email: recoveryMail,
        password: recoveryNewPassword,
      });
      if (json.statusCode !== 0) {
        const { token, refreshToken, userPageDto } = await json;
        dispatch(updateUser({ token, refreshToken, userPageDto }));
        console.log(user);
        navigate('/');
      } else {
        console.log('Incorrect password (server)');
      }
    } else console.log('Incorrect password (validation)');
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
            <input
              type="text"
              name="mail"
              id="recoveryMail"
              value={recoveryMail}
              onChange={onMailChage}
              placeholder="examplemail@mail.com"
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
            <input
              type="text"
              name="recoveryCode"
              id="recoveryCode"
              className="recoveryCode"
              value={recoveryCode}
              onChange={onRecoveryCodeChage}
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
            <label htmlFor="newPassword">
              Введите новый пароль
              <input
                type="text"
                name="newPassword"
                id="newPassword"
                value={recoveryNewPassword}
                onChange={onNewPasswordChage}
              />
            </label>
            <label htmlFor="newPassword2">
              Повторите новый пароль
              <input
                type="text"
                name="newPassword2"
                id="newPassword2"
                value={recoveryNewPassword2}
                onChange={onNewPassword2Chage}
              />
            </label>
            <CommonButton variant="primary">
              Сохранить новый пароль
            </CommonButton>
          </form>
        </div>
      ) : null}
    </main>
  );
}
