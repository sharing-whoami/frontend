import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
        <ul>
            <Link to="/login">로그인</Link>
            <Link to="/register">회원가입</Link>
        </ul>
    </div>
  )
}

export default LandingPage