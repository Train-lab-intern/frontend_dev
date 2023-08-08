import React from 'react';
import MainPage from './pages/Main/MainPage';
import Auth from "./pages/Auth/Auth";
import Registr from "./pages/Registration/Registr";
import {Routes, Route, Link} from 'react-router-dom'
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import UserPage  from "./pages/userPage/UserPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/registr' element={<Registr />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/userpage' element={<UserPage />} />
        </Routes>
    </div>
  );
}

export default App;
