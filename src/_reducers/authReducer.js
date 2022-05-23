import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_actions/types";

export default function loginReducer(previousState={},action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...previousState, loginSuccess: action.payload}
        case REGISTER_USER:
            return { ...previousState, loginSuccess: action.payload}
        case AUTH_USER:
            // action.payload 에 사용자 데이터 담김
            return { ...previousState, userData: action.payload}
        default:
            return previousState;
    }
}