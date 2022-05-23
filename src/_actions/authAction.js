import axios from 'axios';
import { REGISTER_USER, LOGIN_USER } from './types';

export function loginUser(dataToSubmit) {
    const request = axios.post('/api/users/login', dataToSubmit)
    .then(res => res.data )
    return {
        type: LOGIN_USER,
        payload: request
    } 
}

export function registerUser(dataToSubmit) {
    const request = axios.post('/api/users/register', dataToSubmit)
    .then(res => res.data )
    return {
        type: REGISTER_USER,
        payload: request
    }
}


export function auth(dataToSubmit) {
    // 백엔드에서 토큰을 사용해 로그인이 되어있다면 사용자 정보를 가져옴
    const request = axios.get('/api/users/auth', dataToSubmit)
    .then(res => res.data )
    return {
        type: REGISTER_USER,
        payload: request
    }
}

