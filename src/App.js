import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './hoc/auth';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AdminPage from './pages/AdminPage/AdminPage';
import { GuestbookPage } from './pages/GuestbookPage';
import { QuestionPage } from './pages/QuestionPage' 

// const AuthLandingPage = Auth(LandingPage, null);
// const AuthLoginPage = Auth(LoginPage, false);
// const AuthRegisterPage = Auth(RegisterPage, false);

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/guestbook" element={<GuestbookPage/>} />
        <Route path="/question" element={<QuestionPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
