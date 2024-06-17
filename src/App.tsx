import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Registration } from './modules/auth/Registration/Registration';
import ChangePassword from './modules/auth/ChangePassword/ChangePassword';
import Profile from './modules/Profile/Profile';
import NotPage from './pages/NotPage/NotPage';
import { Path } from './pages/constants/path';
import { useAppDispatch, useAppSelector } from './redux/store';
import { auth } from './modules/auth/authReducer';
import { PrivateRoute } from './pages/PrivateRoute';
import { RequestStatus } from './pages/constants/requestStatus';
import ProfileSettings from './modules/ProfileSettings/ProfileSettings';
import MainPage from './pages/Main/MainPage';
import { Authorization } from './modules/Authorization';
import UserPage from './pages/UserPage/UserPage';
import './styles/main.scss';

function App() {
  const primary = true;
  const dispatch = useAppDispatch();
  const appStatus = useAppSelector((state) => state.app.appStatus);

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <div className="App">
      {appStatus === RequestStatus.SUCCEEDED && (
        <Routes>
          <Route path={Path.HOME} element={<MainPage />} />
          <Route
            path={Path.AUTH}
            element={<Authorization primary={primary} />}
          />
          <Route path={Path.REGISTRATION} element={<Registration />} />
          <Route path={Path.CHANGE_PASSWORD} element={<ChangePassword />} />
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
          <Route path="*" element={<NotPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
