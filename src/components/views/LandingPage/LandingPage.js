import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {

  const onClickHandler = (props) =>{
    axios.get('/api/users/logout')
    .then(res => {
      if(Response.data.susess){
        props.history.push('/login')
      }
    })
  }
  return (
    <div>
        <ul>
            <Link to="/login">로그인</Link>
            <Link to="/register">회원가입</Link>
            <Link to="/question">오늘의 질문</Link>
        </ul>
        <button onClick={onClickHandler}>로그아웃</button>
    </div>
  )
}

export default LandingPage