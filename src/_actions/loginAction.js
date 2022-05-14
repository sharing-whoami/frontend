import axios from 'axios';
import {LOGIN_USER } from './types';

export function loginUser(dataToSubmit) {
    const request = axios.post('/api/users/login', dataToSubmit)
    .then(res => res.data )

    // reducer 에서 사용할 수 있도록 Action 을 return
    return {
        type: LOGIN_USER,
        // payload 에는 서버에서 보낸 데이터가 들어옴
        payload: request
    } 
}