import './AddLinks.scss';
import { Link } from 'react-router-dom';
import { Path } from '../../pages/constants/path';

export default function AddLinks({register}:{register?:boolean}) {
  return (
    <div className="links">
      <div className="line">
        <div className="links-info">Нет аккаунта на IT Roast?</div>
        {register ? 
        <Link to={Path.AUTH}>Войти</Link> :
        <Link to={Path.REGISTRATION}>Присоединяйся!</Link>}
      </div>
      <div className="line">
        <div className="links-info">Остались вопросы?</div>
        <Link to={Path.HOME}>Спроси нас!</Link>
      </div>
    </div>
  );
}
