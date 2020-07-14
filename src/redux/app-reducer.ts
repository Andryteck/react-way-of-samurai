import {ActionTypes} from "redux-form";
import {authAPI} from "../api/Api";
import {getAuthUserData, setAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type SetInitializedActionType = {
    type: 'INITIALIZED_SUCCESS'
}

let initialState = {
    initialized: false
}

type ActionType = SetInitializedActionType

const appReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }


}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch: Function) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })

}

export default appReducer