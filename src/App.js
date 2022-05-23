import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './hoc/auth';

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import AdminPage from './components/views/AdminPage/AdminPage';
import { GuestbookPage } from './components/views/GuestbookPage';
import { QuestionPage } from './components/views/QuestionPage' 

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
