import React, {useEffect} from 'react';
import {Login} from "./features/auth/Login/Login";
import {Registration} from "./features/auth/Registration/Registration";
import {Routes, Route} from 'react-router-dom'
import ChangePassword from "./features/auth/ChangePassword/ChangePassword";
import {Profile} from "./features/profile/Profile/Profile";
import NotPage from "./pages/NotPage/NotPage";
import {Path} from "./constants/path";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {auth} from "./features/auth/authReducer";
import {PrivateRoute} from "./pages/PrivateRoute";
import {RequestStatus} from "./constants/requestStatus";
import {ProfileSettings} from "./features/profile/ProfileSettings/ProfileSettings";
import {MainPage} from "./pages/Main/MainPage";

function App() {

  const dispatch = useAppDispatch()
  const appStatus = useAppSelector(state => state.app.appStatus)

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <div className="App">
      {appStatus === RequestStatus.SUCCEEDED && <Routes>
        <Route path={Path.HOME} element={<MainPage/>}/>
        <Route path={Path.AUTH} element={<Login/>}/>
        <Route path={Path.REGISTRATION} element={<Registration/>}/>
        <Route path={Path.CHANGE_PASSWORD} element={<ChangePassword/>}/>
        <Route path={Path.PROFILE} element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        }/>
        <Route path={Path.PROFILE_SETTINGS} element={
          <PrivateRoute>
            <ProfileSettings />
          </PrivateRoute>
        }/>
        <Route path='*' element={<NotPage/>}/>
      </Routes>}
    </div>
  );
}

export default App;
