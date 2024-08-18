import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { Path } from '../../pages/constants/path';
import CommonButton from '../../UI/CommonButton/CommonButton';
import { useAppSelector } from '../../redux/store';

export default function Header() {
  const token = useAppSelector(state => state.user.user.token);
  console.log(token)
  return (    
    <header className='header'>
      <div className="container">
      <NavLink to={Path.HOME}>
        <img src={logo} alt="Logo" />
      </NavLink>
      <div className="links">
        <NavLink to='/'>О нас</NavLink>
        <NavLink to='/'>Меню тестов</NavLink>
        <NavLink to='/'>Резюме</NavLink>
      </div>
      <div className="controls">
      {token === null ? (
        <>
          <NavLink to={Path.AUTH}>
            <CommonButton variant='outline'>Войти</CommonButton>
          </NavLink>
          <NavLink to={Path.REGISTRATION}>
            <CommonButton variant='primary'>Регистрация</CommonButton>
          </NavLink> 
        </>
      ) : (
        <>
          <NavLink to={Path.PROFILE_SETTINGS}>
            <CommonButton variant='outline'>Настройки</CommonButton>
          </NavLink>
          <CommonButton variant='primary'>Выйти</CommonButton>
        </>
      )}
        

      </div>
      </div>
    </header>
  );
}
