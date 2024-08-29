import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
import Profile from './modules/Profile/Profile';
// import NotPage from './pages/NotPage/NotPage';
import { Path } from './pages/constants/path';
// import { useAppDispatch } from './redux/store';
import PrivateRoute from './pages/PrivateRoute';
import ProfileSettings from './modules/ProfileSettings/ProfileSettings';
import MainPage from './pages/Main/MainPage';
import UserPage from './pages/UserPage/UserPage';
import './styles/main.scss';
import PasswordRecoveryPage from './pages/PasswordRecoveryPage/PasswordRevoveryPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  // const appStatus = useAppSelector((state) => state.app.appStatus);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={Path.AUTH} element={<LoginPage />} />
        <Route path={Path.REGISTRATION} element={<RegisterPage />} />
        <Route
          path={Path.PROFILE}
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path={Path.PROFILE_SETTINGS}
          element={
            <PrivateRoute>
              <ProfileSettings />
            </PrivateRoute>
          }
        />
        <Route path={Path.USER_PAGE} element={<UserPage />} />
        <Route
          path={Path.PASSWORD_RECOVERY}
          element={<PasswordRecoveryPage />}
        />
        {/* <Route path="*" element={<NotPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
