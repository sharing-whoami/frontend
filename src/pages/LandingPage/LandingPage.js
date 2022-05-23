import axios from 'axios';
import React from 'react';
import Header from '../../components/Header';

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
        <Header/>
        <button onClick={onClickHandler}>로그아웃</button>
    </div>
  )
}

export default LandingPage