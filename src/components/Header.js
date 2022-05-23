import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header>
          <Link to="/login">로그인</Link>
            <Link to="/register">회원가입</Link>
            <Link to="/question">오늘의 질문</Link>
      </header>
  )
}

export default Header;