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
            debugger
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


export default authReducer