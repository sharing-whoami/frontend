import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/authAction'

export default function authHoc(SpecificComponent,option,adminRoute = null) {
    // option
    // null : 아무나 출입이 가능한 페이지
    // true : 로그인한 유저만
    // false : 로그인한 유저는 출입 불가능
    // adminRoute
    // admin 사용자만 출입 가능
    // default null
    
    // 페이지가 이동할 때마다 백엔드 서버에 response
    function AuthenticationCheck(props){

        const dispatch = useDispatch();

        useEffect(() => {
    
            dispatch(auth())
            .then(res => {
                // 로그인하지 않은 사용자
                if(!res.payload.isAuth) {
                    if(option) {
                        props.history.push('/login');
                    }
                // 로그인한 상태
                } else {
                    if(adminRoute && !res.payload.isAdmin) {
                        props.history.push('/');
                    } else {
                        // 로그인한 유저가 접근 불가능한 페이지에 들어갈 때
                        if(option) {
                            props.history.push('/');
                        }
                    }

                }
    
            })
         
        },[])

    }
   
    return AuthenticationCheck;
}

// https://cafe.naver.com/16fajsb/313