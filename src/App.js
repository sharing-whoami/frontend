import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Auth from './hoc/auth';

import LandingPage from './components/LandingPage';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import AdminPage from './components/Admin/AdminPage';
import { GuestbookPage } from './components/Guestbook';
import { QuestionPage } from './components/Question' 
import { AnswerPage } from './components/Answer';
import { CommentPage } from './components/Comment';
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
        <Route path="/answer" element={<AnswerPage/>} />
        <Route path="/answer/:answerId/comments" element={<CommentPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
