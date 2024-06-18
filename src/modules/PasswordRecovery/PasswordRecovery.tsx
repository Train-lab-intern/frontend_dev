import { useState } from 'react';
import './PasswordRecovery.scss';
import { ChangeInputEvent } from '../../@types/types';
import CommonButton from '../../UI/CommonButton/CommonButton';

export default function PasswordRecovery() {
  const [mail, setMail] = useState('');
  // const [recoveryCode, setRecoveryCode] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [newPassword2, setNewPassword2] = useState('');

  const onMailChage = (event:ChangeInputEvent) => {
    event.preventDefault()
    const target = event.target as HTMLInputElement
    setMail(target.value);
  }

  // const onRecoveryCodeChage = (event) => {
  //   setRecoveryCode(event.target.value);
  // }

  // const onNewPasswordChage = (event) => {
  //   setNewPassword(event.target.value);
  // }

  // const onNewPassword2Chage = (event) => {
  //   setNewPassword2(event.target.value);
  // }

  return (
    <main className='PasswordRecovery'>
      <div className='recovery_container'>
        <form >
          <div>Укажите адрес Вашей электронной почты, указанной при регистрации.</div>
          <div>Мы вышлем одноразовый код.</div>
          <input type="text" name="recoveryMail" id="recoveryMail" value={mail} onChange={onMailChage} placeholder='Mail'/>
          <CommonButton variant="primary">Получить код</CommonButton>
        </form>
      </div>
    </main>
  )
}