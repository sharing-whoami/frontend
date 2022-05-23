import React, { useState }   from 'react'
import { useDispatch} from 'react-redux';
import { registerUser } from '../../_actions/authAction'

function RegisterPage(props) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }

  const onUserNameHandler = (e) => {
    setUserName(e.currentTarget.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  }


  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(password !== confirmPassword) return alert('비밀번호를 확인해 주세요.')

    const body = {
      email,
      username,
      password
    }

    dispatch(registerUser(body))
    .then(res => {
      if(res.payload.RegisterSuccess){
        props.history.push('/login')
      } else {
        alert('error');
      }
    })
    
  }

  return (
    <div>
      <form 
        onSubmit={onSubmitHandler}>
        <label>이메일</label>
        <input type="email" value={email} onChange={onEmailHandler}/>
        <label>이름</label>
        <input type="text" value={username} onChange={onUserNameHandler}/>
        <label>비밀번호</label>
        <input type="password"  autoComplete="on" value={password} onChange={onPasswordHandler}/>
        <label>비밀번호 확인</label>
        <input type="password"  autoComplete="on" value={confirmPassword} onChange={onConfirmPasswordHandler}/>
        <button>회원가입</button>
      </form>
    </div>
  )
}

export default RegisterPage;