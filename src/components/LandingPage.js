import axios from 'axios';
import React from 'react';
import Header from './Header';

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
        <button onClick={onClickHandler}>๋ก๊ทธ์์</button>
    </div>
  )
}

export default LandingPage