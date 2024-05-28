import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.png';
import { Path } from '../../pages/constants/path';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            {pathname === Path.HOME ? (
              <img src={logo} alt="Logo" />
            ) : (
              <NavLink to={Path.HOME}>
                <img src={logo} alt="Logo" />
              </NavLink>
            )}
          </div>
          <div className={styles.nav}>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
