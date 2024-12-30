import './Header.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { Path } from '../../pages/constants/path';
import CommonButton from '../../UI/CommonButton/CommonButton';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import MainApiService from '../../api/MainApiService';
import { updateUser } from '../../redux/reducers/userSlice';

export default function Header({ settings }: { settings?: boolean }) {
  const { token, refreshToken } = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const logOut = async () => {
    const json = await MainApiService.userLogout({
      refreshToken: refreshToken?.value,
    });
    if (json.statusCode !== 0) {
      dispatch(
        updateUser({ token: null, refreshToken: null, userPageDto: null }),
      );
    }
  };
  return (
    <header className="header">
      <div className="container">
        <NavLink to={Path.HOME}>
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="links">
          <NavLink to="/">О нас</NavLink>
          <NavLink to={Path.TESTS_MENU}>Меню тестов</NavLink>
          <NavLink to="/">Резюме</NavLink>
        </div>
        <div className="controls">
          {!token ? (
            <>
              <NavLink to={Path.AUTH}>
                <CommonButton variant="outline">Войти</CommonButton>
              </NavLink>
              <NavLink to={Path.REGISTRATION}>
                <CommonButton variant="primary">Регистрация</CommonButton>
              </NavLink>
            </>
          ) : (
            <>
              <CommonButton variant="outline" callBackFunction={logOut}>
                Выйти
              </CommonButton>
              {!settings ? (
                <NavLink to={Path.PROFILE}>
                  <CommonButton variant="primary">Профиль</CommonButton>
                </NavLink>
              ) : (
                <NavLink to={Path.PROFILE_SETTINGS}>
                  <CommonButton variant="primary">Настройки</CommonButton>
                </NavLink>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
