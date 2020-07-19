import {authAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA: string = 'SET_USER_DATA'


type AuthType = {
    id: any,
    email: any,
    login: any,
    isAuth: boolean
}

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }


}

export let setAuthUserData = (userId: any | null, email: string| null, login: any| null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}
})
export const getAuthUserData = () => async (dispatch: Function) => {
  let response = await authAPI.me()

            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }

}

export const login = (email: string, password: string, rememberMe: any) => async (dispatch: Function) => {
   let response = await authAPI.login(email, password, rememberMe)

            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
               let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }

}
export const logout = () => async (dispatch: Function) => {
    let response = await authAPI.logout()

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }

}

export default authReducer