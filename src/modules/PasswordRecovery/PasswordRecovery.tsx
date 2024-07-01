import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordRecovery.scss';
import { ChangeInputEvent, SubmitFormEvent } from '../../@types/types';
import CommonButton from '../../UI/CommonButton/CommonButton';
import { validMail, validOnlyNumber, validPassword, validRecoveryCode } from '../../helpers';
import MainApiService from '../../api/MainApiService';

export default function PasswordRecovery() {
  const [recoveryMail, setRecoveryMail] = useState('');
  const [recoveryCode, setRecoveryCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');

  const [mailFormVisible, setMailFormVisible] = useState(true);
  const [recoveryCodeFormVisible, setRecoveryCodeFormVisible] = useState(false);
  const [newPasswordFormVisible, setNewPasswordFromVisible] = useState(false);

  const navigate = useNavigate();

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
    setNewPassword(event.target.value);
  };

  const onNewPassword2Chage = (event: ChangeInputEvent) => {
    setNewPassword2(event.target.value);
  };

  const submitMail = async (event: SubmitFormEvent) => {
    event.preventDefault();
    if (validMail(recoveryMail)) {      
      const json = await MainApiService.passwordRecoveryMail({recoveryMail})
      if (json.statusCode !== 0) {
        setMailFormVisible(false);
        setRecoveryCodeFormVisible(true);
      } else {
        console.log('Mail is not find')
      }
    } else 
    console.log('Invalid mail')
  };

  const submitRecoveryCode = async (event: SubmitFormEvent) => {
    event.preventDefault();
    if (validRecoveryCode(recoveryCode)) {
      const json = await MainApiService.passwordRecoveryCode({recoveryCode});
      if (json.statusCode !== 0) {
        setRecoveryCodeFormVisible(false);
        setNewPasswordFromVisible(true);
      } else {
        console.log('Code is not correct')
      }
    } else 
    console.log('Invalid recovery code')
  };

  const SubmitNewPassword = async (event: SubmitFormEvent) => {
    event.preventDefault();
    if (newPassword !== newPassword2) 
      console.log('Password is not same');

    else if (validPassword(newPassword)) {
      const json = await MainApiService.userRecoveryNewPassword({newPassword})
      if (json.statusCode !== 0) {
        navigate('/');
      } else {
        console.log('Incorrect password (validation)')
      }
    } else 
    console.log('Incorrect password (server)')
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
                value={newPassword}
                onChange={onNewPasswordChage}
              />
            </label>
            <label htmlFor="newPassword2">
              Повторите новый пароль
              <input
                type="text"
                name="newPassword2"
                id="newPassword2"
                value={newPassword2}
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