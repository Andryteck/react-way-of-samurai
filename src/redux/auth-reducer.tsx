import {authAPI} from "../api/Api";

const SET_USER_DATA: string = 'SET_USER_DATA'


type AuthType = {
    id: any,
    email: any,
    login: any,
    isAuth:boolean
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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }


}

export let setAuthUserData = (data: AuthType) => ({
    type: SET_USER_DATA, data: data
})
export const getAuthUserData = () => (dispatch:Function) =>{
    return authAPI.me()
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data))
        }

    })
}

export default authReducer