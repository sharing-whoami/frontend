import { LOGIN_USER } from "../_actions/types";

export default function loginReducer(previousState={},action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...previousState, loginSuccess: action.payload}
        default:
            return previousState;
    }
}