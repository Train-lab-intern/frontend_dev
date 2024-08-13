import './AddLinks.scss';
import { Link } from 'react-router-dom';
import { Path } from '../../pages/constants/path';

export default function AddLinks() {
  return (
    <div className="links">
      <div className="line">
        <div className="links-info">Нет аккаунта на IT Roast?</div>
        <Link to={Path.REGISTRATION}>Присоединяйся!</Link>
      </div>
      <div className="line">
        <div className="links-info">Остались вопросы?</div>
        <Link to={Path.HOME}>Спроси нас!</Link>
      </div>
    </div>
  );
}
