import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { loginUser } from '../../../_actions/loginAction'

function LoginPage(props) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const body = {
      email,
      password
    }

    dispatch(loginUser(body))
    .then(res => {
      if(res.payload.loginSuccess){
        props.history.push('/')
      } else {
        alert('error');
      }
    })
    
  }

  return (
    <div>
      <form 
        onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler}/>
        <label>Password</label>
        <input type="password"  autoComplete="on" value={password} onChange={onPasswordHandler}/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage;