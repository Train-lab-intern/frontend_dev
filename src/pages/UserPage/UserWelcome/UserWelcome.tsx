import './UserWelcome.scss';
import CommonButton from '../../../UI/CommonButton/CommonButton';

export default function UserWelcome() {
  return (
    <section className="Welcome">
      <div className="container">
        <h2>Привет, Имя!</h2>
        <h2>Добро пожаловать в трекинг знаний.</h2>
        <div className="MainActions">
          <CommonButton variant="outline">Начать новый тест</CommonButton>
          <CommonButton variant="primary">
            Ознакомиться со статистикой
          </CommonButton>
        </div>
      </div>
    </section>
  );
}
