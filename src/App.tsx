import React from 'react';
import MainPage from './pages/Main/MainPage';
import Auth from "./pages/Auth/Auth";
import Registr from "./pages/Registration/Registr";
import {Routes, Route, Link} from 'react-router-dom'
import ChangePassword from "./pages/ChangePassword/ChangePassword";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/registr' element={<Registr />} />
            <Route path='/changepassword' element={<ChangePassword />} />
        </Routes>
    </div>
  );
}

export default App;
