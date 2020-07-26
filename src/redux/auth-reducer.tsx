import {authAPI, securityAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA: string = 'SET_USER_DATA'


type AuthType = {
    id: any,
    email: any,
    login: any,
    isAuth: boolean,
    captchaUrl: any
}

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha not required
}

const authReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case 'GET_CAPTCHA_URL_SUCCESS' :
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }


}

export let setAuthUserData = (userId: any | null, email: string | null, login: any | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}
})
export let getCaptchaUrlSuccess = (captchaUrl: any) => ({
    type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
})
export const getAuthUserData = () => async (dispatch: Function) => {

    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const login = (email: string, password: string, rememberMe: any, captcha: any) => async (dispatch: Function) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        // success, get auth data
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}
export const getCaptchaUrl = () => async (dispatch: Function) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}


export const logout = () => async (dispatch: Function) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export default authReducer